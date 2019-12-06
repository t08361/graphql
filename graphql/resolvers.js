const joyongjun = {
    name: "joyongjun",
    age: 22,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => joyongjun
    }
}; 

export default resolvers;