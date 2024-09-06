import { useState } from "react";
import ModalBox from "./modal";

const BlogList = ({ blogs, handleDelete, handleEdit }) => {
  
  const [modalOpen, setModalOpen] = useState(false)
  const [id, setId] = useState()
  const [currentTitle, setCurrentTitle] = useState("")
  const [currentContent, setCurrentContent] = useState("")
  
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button className="del"  onClick={() => handleDelete(blog.id)}>delete record</button>
          <button className="edit"
            onClick={() => {
              setModalOpen(true)
              setId(blog.id);
              setCurrentContent(blog.content)
              setCurrentTitle(blog.title)
            }}
          >
            edit content
          </button>
        </div>
      ))}
      
      {modalOpen && <ModalBox Id={id} handleEdit = {handleEdit} setModalOpen = {setModalOpen} currentContent = {currentContent} currentTitle={currentTitle} />}
    </div>
  );
};

export default BlogList;
