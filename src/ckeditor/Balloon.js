import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from './balloon-editor/build/ckeditor';
import { useField, useFormikContext } from 'formik';

export const Balloon = ({ name }) => {
  const [field, helpers, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const config = {
    toolbar: ["bold", "italic", "bulletedList", "numberedList", "link"],
    licenseKey: "GPL",
    placeholder: "Type here...",
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setFieldValue(name, data);
  };

  return (
    <div className="border-2 rounded-md">
      <CKEditor
        editor={BalloonEditor}
        config={config}
        data={field.value}
        onChange={handleEditorChange}
      />
    </div>
  );
};