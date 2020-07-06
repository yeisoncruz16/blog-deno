import { Status } from "../deps.ts";
import PostsModel from "../models/posts.ts";

export async function index(context: any) {
    context.response.status = Status.OK;
    context.response.type = 'json';
    context.response.body = await PostsModel.find();
}

export async function store(context: any) {
    let {value:params} = await context.request.body();

    let post = new PostsModel();
    post.title = params.title;
    post.description = params.description;
    post.created_at = new Date();

    await post.save();

    context.response.status = Status.Created;
    context.response.type = 'json';
    context.response.body = post;
}

export async function remove(context: any) {
    let {id} = context.params;
    let post = await PostsModel.findOne(parseInt(id));
    if(post){
        await post.remove();
        context.response.status = Status.Accepted;
    }else{
        context.response.status = Status.NotFound;
    }
}

export async function update(context: any) {
    let {id} = context.params;
    let {value:{title, description}} = await context.request.body();

    let post = await PostsModel.findOne(parseInt(id));
    if(post){
        post.title = title;
        post.description = description;
        await post.save();
        context.response.body = post;
        context.response.status = Status.Accepted;
    }else{
        context.response.status = Status.NotFound;
    }
}