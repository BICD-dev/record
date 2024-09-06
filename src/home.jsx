import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  //defining state
  const [records, setRecords] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  //changing the title and content for each record
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    // console.log(title)
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
    // console.log(content);
  };
  //adding the record
  const HandleAdd = (event) => {
    event.preventDefault();

    let addTest = records;
    addTest.push({ title, content, id });
    setRecords(addTest);
    setId((val) => (val += 1));

    setTitle("");
    setContent("");
  };

  //deleting the record
  const handleDelete = (id) => {
    const newRecord = records.filter((record) => record.id !== id);
    setRecords(newRecord);
  };
  //editing the record content alone
  const handleEdit = (id, newTitle,newContent) => {

    const newRecord = records.map((record) => {
      if (record.id === id) {
        record.title = newTitle
        record.content = newContent;
      }
      return record;
    });
    setRecords(newRecord);
  };

  return (
    <div className="home">
      {/* this is a modal box that appears when the record is about to be deleted */}
      
      <div className="flex">
        <form className="form">
          <h1>Record keeper</h1>
          <input
            type="text"
            value={title}
            id="title"
            placeholder="Title"
            onChange={handleTitleChange}
          />
          <input
            type="text"
            value={content}
            name="content"
            id="content"
            placeholder="Content"
            onChange={handleContentChange}
          />
          <button className="add" onClick={HandleAdd}>
            add record
          </button>
        </form>
      </div>
      <div className="blog">
        {(records && (
          <BlogList
            blogs={records}
            title="All records"
            handleDelete={handleDelete}
            handleEdit={handleEdit} 
          />
        )) || <p>No new records</p>}
      </div>
    </div>
  );
};

export default Home;
