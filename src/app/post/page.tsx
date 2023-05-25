const getPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUserData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function Post() {
  const [post, users] = await Promise.all([getPostData(), getUserData()]);

  return (
    <div>
      <h1>List of Post</h1>
      {post.map((post: any) => {
        return <p> {post.title}</p>;
      })}
      <div>
        {users.map((user: any) => {
          return <p>{user.name}</p>;
        })}
      </div>
    </div>
  );
}
