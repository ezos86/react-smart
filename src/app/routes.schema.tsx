const routes = [
    {
        title: 'Get All Users',
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
    },
    {
        title: 'Get User Data',
        url: 'https://jsonplaceholder.typicode.com/users/{id}',
        method: 'GET',
        parameters: [
            {
                name: 'User ID',
                key: 'id',
                placeholder: '1'
            }
        ]
    },
    {
        title: 'Create New User',
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'POST',
        body: [
            {
                name: 'email',
                type: 'email',
                max: 24,
                min: 3,
            },
            {
                name: 'full-name',
                type: 'text',
                placeholder: 'John Doe',
                required: true,
            },
            {
                name: 'phone',
                type: 'tel',
            },
        ]
    },
    {
        title: 'Update User',
        url: 'https://jsonplaceholder.typicode.com/users/{id}',
        method: 'PUT',
        parameters: [
            {
                name: 'User ID',
                key: 'id',
                placeholder: '1'
            }
        ],
        body: [
            {
                name: 'email',
                type: 'email',
                max: 24,
                min: 3,
            },
            {
                name: 'full-name',
                type: 'text',
                placeholder: 'John Doe',
                required: true,
            },
            {
                name: 'phone',
                type: 'tel',
            },
        ]
    },
    {
        title: 'Remove User',
        url: 'https://jsonplaceholder.typicode.com/users/{id}',
        method: 'DELETE',
        parameters: [
            {
                name: 'User ID',
                key: 'id',
                placeholder: '1'
            }
        ]
    }
];

export default routes;