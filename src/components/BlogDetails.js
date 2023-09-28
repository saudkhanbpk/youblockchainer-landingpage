import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState([]);
  const { blogId } = useParams();
  
  const fetchBlogs = () => {
    axios
      .get(`https://app.myreeldream.ai/api/v1/blog/`)
      .then((res) => {
        let filterBlogs = res.data.filter((x) => x._id === blogId);
        setBlogs(filterBlogs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBlogs();
  }, [blogId]);

  return (
    <>
      <main>
        { (
          <div className="container-fluid">
            <div >
              <div className="d-flex align-items-center">
                <h2>
                  {blogs[0]?.title}
                </h2>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={
                    blogs[0]?.image
                  }
                  alt={blogs[0]?._id}
                  className="img-fluid"
                  style={{ width: '100%' }}
                />
              </div>
              <div
                className="my-5"
                dangerouslySetInnerHTML={{ __html: blogs[0]?.content }}
              ></div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

// export async function getStaticPaths() {
//   const req = await fetch(`${global.BackendUrlMain}/blogs`);
//   const data = await req.json();

//   const paths = data?.map((item) => ({
//     params: { slug: item.blogs_slug },
//   }));
//   return { paths, fallback: "blocking" };
// }

// export async function getStaticProps(context) {
//   const { slug } = context.params;
//   const req = await fetch(`${global.BackendUrlMain}/blogs`);
//   const data = await req.json();

//   const blog = data?.find((x) => x?.blogs_slug === slug);

//   return {
//     props: {
//       blog,
//     },
//     revalidate: 10, // In seconds
//   };
// }
