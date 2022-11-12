import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Card from "./card";

const Post = () => {
  const BASE_URL = "https://jcc.brandingyou.id/api/";
  const token = localStorage.getItem("token");

  const [loadPost, setLoadPost] = useState([]);
  const [editId, setEditId] = useState("");
  // const [judul,setJudul] = useState('');
  // const [input, setInput] = useState({
  //   title: "",
  //   content: "",
  //   image: "",
  // });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [edit, setEdit] = useState({
    id: null,
    title: "",
    content: "",
    image: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const getPost = async () => {
    try {
      let res = await axios.get(`${BASE_URL}post`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setLoadPost(res.data.data);
      console.log(res.data.data);
    } catch (e) {}
    // console.log(token)
    // e.preventDefault();
    // let response = axios
    //   .get(`${BASE_URL}post`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(function (response) {
    //     // console.log(response);
    //     setLoadPost(response.data.data);
    //     console.log(response.data.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const Upload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("content", content);
    data.append("image", image);
    // console.log(input)
    // console.log(data.title);

    if (isEdit === true) {
      axios
        .post(`${BASE_URL}post/${editId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          getPost();
          setIsEdit(false);
        })
        .catch(function (error) {
          console.log(error);
        });
      setTitle("");
      setContent("");
    } else {
      axios
        .post(`${BASE_URL}post`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          getPost();
        })
        .catch(function (error) {
          console.log(error);
        });
      setTitle("");
      setContent("");
    }
  };

  const handleEdit = (id) => {
    const dataEdit = new FormData();
    dataEdit.append("title", edit.title);
    dataEdit.append("content", edit.content);
    dataEdit.append("image", edit.image);
    setIsEdit(true);
    axios
      .get(`${BASE_URL}post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        setTitle(response.data.data.title);
        setContent(response.data.data.content);
        setEditId(id);
        console.log(editId);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${BASE_URL}post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log("Berhasil");
      })
      .catch(function (error) {
        console.log(error);
      });

    getPost();
  };

  const Edit = (id) => {
    axios
      .get(`${BASE_URL}post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "applicatin/json",
        },
      })
      .then(function (response) {
        setEdit(response);
        console.log(response).catch(function (error) {
          console.log(error);
        });
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <form className="p-5">
          <h1>WhanDPost</h1>
          <div className="mb-5">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-5">
            <label className="form-label row-5">Content</label>
            <input className="form-control" value={content} name="content" onChange={(e) => setContent(e.target.value)} />
          </div>
          <div className="mb-5">
            <label className="form-label">Upload Image</label>
            <input accept=".jpg, .png, .jpeg" className="form-control" type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button className="btn btn-primary" onClick={Upload}>
            Post
          </button>
        </form>
        <div className="row">
          {loadPost.map((isiPost) => {
            return (
              <Card
                key={isiPost.id}
                id={isiPost.id}
                title={isiPost.title}
                body={isiPost.content}
                image={isiPost.image}
                clickremove={handleDelete}
                clickedit={handleEdit}
                //  clickremove={this.handleRemove} clickedit={this.handleEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
