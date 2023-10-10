import {faker, Faker, es, en} from "@faker-js/faker";

export const {database,commerce, image, string} = faker;

export const generateProduct = () =>{
    return{
        id:faker.database.mongodbObjectId(),
        title:faker.commerce.productName(),
        price:parseFloat(faker.commerce.price()),
        stock:parseInt(faker.string.numeric(2)),
        image: faker.image.url(),
        code:faker.string.alphanumeric(10),
        description:faker.commerce.productDescription()
    }
};