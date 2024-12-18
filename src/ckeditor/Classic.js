import { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Box } from '@mui/joy';

import { patchDetails, getDetail, resetDetail } from "../jsonserver.js";

const Classic = () => {
  const [data, setData] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchDetails = async () => {
      const allDetails = await getDetail(id);
      if (allDetails && allDetails.details) {
        setSubmittedData(allDetails.details);
      }
    };
    fetchDetails();
  }, [id]);

  useEffect(() => {
    if (submittedData.length > 0) {
      patchDetails(id, submittedData);
    }
  }, [submittedData, id]);

  const handleSubmit = (data) => {

    const removeHtmlTags = (input) => {
      return input.replace(/<\/?[^>]+(>|$)/g, "");
    };

    setSubmittedData((prevData) => [...prevData, removeHtmlTags(data)]);
    patchDetails(id, [...submittedData, removeHtmlTags(data)]);
    setData('');
  };

  const handleReset = (id) => {
    resetDetail(id)
    setSubmittedData([])
  };

  const editorConfiguration = {
    licenseKey: 'GPL',
    toolbar: [
      'bold', 'italic', 'link',
      'bulletedList', 'numberedList', 'blockQuote',
      'insertTable', 'undo', 'redo'
    ],
  };

  return (
    <>
      <div className='mt-10'>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data={data}
        onChange={(event, editor) => {
          const newData = editor.getData();
          setData(newData);
        }}
      />
      </div>

      <div className='flex justify-center items-center gap-14 mt-4'>
        <Button variant="soft" color="danger" onClick={() => handleReset(id)}>Reset</Button>
        <Button variant="soft" onClick={() => handleSubmit(data)}>Submit</Button>
      </div>

      <div>
        {submittedData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default Classic;
