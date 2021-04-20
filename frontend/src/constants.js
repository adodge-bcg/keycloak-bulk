const randomString = () => Math.random().toString(36).substring(2)

export const INITIAL_IMPORT_USERS_TEXT = `\
alice,Alice,Foo,alice@example.com,${randomString()},user-group|example-group
bob,Bob,Bar,bob@example.com,${randomString()},admin-group|other-group
`
