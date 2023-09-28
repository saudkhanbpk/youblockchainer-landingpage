import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = () => {
      setLoading(true);
      axios
        .get(`https://app.myreeldream.ai/api/v1/blog/`)
        .then((res) => {
          setBlogData(res.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    fetchBlogs();
  }, []);

  return (
    <>
      {/* <Head>
        <title>Blogs - My Reel Dream AI</title>
      </Head> */}
      <h2 style={{ marginLeft: '1vw' }}>Blogs</h2>
      <main>
        <div className="shc-dashboard-container">
          <div className="mt-5">
            <div className={`row`}>
              {
              // !loading ?
               (

                blogData?.map((b, i) => (
                  <div
                    key={i}
                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                  >
                    <Link
                      to={`/blog/${b._id}`}
                      className="text-decoration-none"
                    >
                      <div>
                        <div className="d-flex align-items-center">
                          <img
                            src={`${b.image}`}
                            alt={b.title}
                            style={{ width: '100%' }}
                          />
                        </div>
                        <div>
                          <h2 className="m-0">{b.title}</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) 
              // : (
              //   <div className="d-flex align-items-center justify-content-center">
              //     <ThreeDots width={35} height={35} color="#0099ff" />
              //   </div>
              // )
              }
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = await fetch(`${global.BackendUrlMain}/blogs`);
//   const blog = await req.json();
//   return {
//     props: {
//       blog,
//     },
//   };
// }
