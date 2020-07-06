import db from "../config/database.ts";
import { Model, Field } from "../deps.ts";

class PostsModel extends Model {
    static tableName = "posts";
    static adapter = db;

    @Field()
    title!: string;

    @Field()
    description!: string;

    @Field()
    created_at!: Date;
}

export default PostsModel;