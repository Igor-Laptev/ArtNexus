import type{ PostId } from "../posts/types"
import type{ User, UserId } from "../users/types"

export type Comment = {
    user_id: UserId,
    post_id:PostId,
    text:string,
    User:User
}