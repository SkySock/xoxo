import mockApiCall from "../apiCall.js";

const mockUsers = [
    {
        id: 1,
        name: 'Александров Игнат Анатолиевич',
        age: 24,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 2,
        name: 'Мартынов Остап Фёдорович',
        age: 12,
        sex: 1,
        status: 4,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 3,
        name: 'Комаров Цефас Александрович',
        age: 83,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 4,
        name: 'Кулаков Станислав Петрович',
        age: 35,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 5,
        name: 'Борисов Йошка Васильевич',
        age: 27,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 6,
        name: 'Негода Михаил Эдуардович',
        age: 20,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 7,
        name: 'Жданов Зураб Алексеевич',
        age: 62,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 8,
        name: 'Бобров Фёдор Викторович',
        age: 32,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 9,
        name: 'Александров Игнат Анатолиевич',
        age: 23,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 10,
        name: 'Многогрешный Павел Виталиевич',
        age: 45,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 11,
        name: 'Пупкин Владлен Игоревич',
        age: 32,
        sex: 1,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
    {
        id: 12,
        name: 'Плюшкина Екатерина Викторовна',
        age: 27,
        sex: 2,
        status: 1,
        createdAt: '2023-03-01',
        updatedAt: '2023-03-01',
    },
];

const mockedUsersApi = {
    getAll: () => mockApiCall(mockUsers),
    addUser: (name, age, sex) => {
        const emptyFields = [];

        if (!name) emptyFields.push('name');
        if (!age) emptyFields.push('age');
        if (!sex) emptyFields.push('sex');

        if (emptyFields.length) {
            return mockApiCall(undefined, {
                errorRate: 1,
                customErrors: [new Error(`Empty ${emptyFields.join(', ')}`)]
            });
        }

        return mockApiCall({
            id: Math.max(...mockUsers.map(({id}) => id)) + 1,
            name,
            age,
            sex,
            status: 1,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        }).then((user) => {
            mockUsers.push(user);
            return user.id;
        });
    },

    updateUser: (id, status) => {
        const emptyFields = [];

        if (!id) emptyFields.push('id');
        if (!status) emptyFields.push('status');

        if (emptyFields.length) {
            return mockApiCall(undefined, {
                errorRate: 1,
                customErrors: [new Error(`Empty ${emptyFields.join(', ')}`)]
            });
        }

        const user = mockUsers.find(({id: userId}) => userId === id);

        if (!user) {
            return mockApiCall(undefined, {
                errorRate: 1,
                customErrors: [new Error('User not found')]
            });
        }

        return mockApiCall().then(() => {
            user.status = status;
        });
    },
};

export default mockedUsersApi;