import { useModalForm, useSelect } from "@refinedev/antd";
import { HttpError, useGo } from "@refinedev/core";
import { CREATE_COMPANY_MUTATION } from "@/graphql/mutations";
import { Form, Input, Modal, Select } from "antd";
import { USERS_SELECT_QUERY } from "@/graphql/queries";
import { SelectOptionWithAvatar } from "@/components"
import { CreateCompanyMutation, CreateCompanyMutationVariables, UsersSelectQuery } from "@/graphql/types";
import { GetFields, GetFieldsFromList, GetVariables } from "@refinedev/nestjs-query";
// import { CompanyCreateModal } from "../list/create-modal";

export const Create = () => {

    const go = useGo();

    const goToListPage = () => {
        go({
            to: { resource: 'companies', action: 'list' },
            options: { keepQuery: true },
            type: 'replace',
        })
    }

    const { formProps, modalProps } = useModalForm<
        GetFields<CreateCompanyMutation>,
        HttpError,
        GetVariables<CreateCompanyMutationVariables>
    >({
        action: "create",
        defaultVisible: true,
        resource: "companies",
        redirect: false,
        mutationMode: "pessimistic",
        onMutationSuccess: goToListPage,
        meta: {
            gqlMutation: CREATE_COMPANY_MUTATION,
        },
    });
    const { selectProps, queryResult } = useSelect<GetFieldsFromList <UsersSelectQuery> >({
        resource: "users",
        optionLabel: "name",
        meta: {
            gqlQuery: USERS_SELECT_QUERY
        }
    })

    return (
            <Modal
                {...modalProps}
                mask={true}
                onCancel={goToListPage}
                title="Create Company"
                width={512}
            >
                <Form {...formProps} layout="vertical" >
                    <Form.Item
                        label="Company Name"
                        name='name'
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="Please enter company name" />
                    </Form.Item>
                    <Form.Item
                        label="Sales Owner"
                        name="salesOwnerId"
                        rules={[{ required: true }]}
                    >
                        <Select
                            placeholder="Please choose sales owner"
                            {...selectProps}
                            options={
                                queryResult.data?.data.map((user) => ({
                                    value: user.id,
                                    label: (
                                        <SelectOptionWithAvatar
                                            name={user.name}
                                            avatarUrl={user.avatarUrl ?? undefined}
                                        />
                                    ),
                                })) ?? []
                            }
                        />
                    </Form.Item>
                </Form>
            </Modal>
    );
};  
