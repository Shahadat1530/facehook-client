import { useAvatar } from "../../hooks/useAvatar";
import PostCommentList from "./PostCommentList";

const PostComments = ({ post }) => {
    const { avatarURL } = useAvatar(post);

    return (
        <div>
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    src={avatarURL}
                    alt="avatar"
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "9999px",
                        border: "2px solid red"
                    }}
                />

                <div className="flex-1">
                    <input
                        type="text"
                        className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
                        placeholder="What's on your mind?"
                    />
                </div>
            </div>
            <div className="mt-4">
                <button className="text-gray-300 max-md:text-sm">
                    All Comment ▾
                </button>
            </div>

            <PostCommentList comments={post?.comments} />
        </div>
    );
};

export default PostComments;
