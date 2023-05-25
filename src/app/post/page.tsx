import Image from "next/image";

const getPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUserData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const getDogData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};

export default async function Post() {
  const [post, users, dogs] = await Promise.all([
    getPostData(),
    getUserData(),
    getDogData(),
  ]);

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
      <Image src={dogs.message} alt="Dogs" width={80} height={80} />
    </div>
  );
}
