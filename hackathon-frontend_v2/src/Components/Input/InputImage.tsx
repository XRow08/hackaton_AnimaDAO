import { useState } from "react";
import { Title } from "../Title";
import { UploadIcon } from "../Icon/UploadIcon";

export function InputImage({ label, multiple, onChange, ...field }: any) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <label className="h-[20rem] w-full max-w-[25rem] border border-dashed border-[rgba(255,255,255,.3)] flex flex-col justify-center items-center gap-4 rounded-2xl hover:border focus:border hover:border-brand-text focus:border-brand-text transition-all duration-300 ease-in-out">
      {selectedFile && (
        <div className="h-full w-full rounded-lg">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="preview"
            className="w-full h-full object-fill rounded-2xl"
          />
        </div>
      )}

      {!selectedFile && (
        <>
          <UploadIcon />
          <Title className="font-medium text-lg text-[rgba(255,255,255,.7)] text-center">
            Você pode subir arquivos PNG e JPEG
          </Title>
          <Title color="white" className="font-medium text-lg">
            Máximo de 100mb
          </Title>

          <div className="bg-[rgba(255,255,255,.01)] cursor-pointer text-white font-lato font-medium text-lg text-center h-12 w-[70%] border flex justify-center items-center border-[rgba(255,255,255,.3)] rounded-lg hover:border-brand-text focus:border-brand-text transition-all duration-300 ease-in-out">
            {label}
          </div>
        </>
      )}

      <input
        onChange={(e) => {
          onChange(e);
          handleFileInputChange(e);
        }}
        {...field}
        multiple={multiple}
        id="file"
        type="file"
        className="sr-only peer"
      />
    </label>
  );
}
