import { useToast } from "../ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";

const MediaUploader = () => {
  const { toast } = useToast();
  return <CldUploadWidget uploadPreset="jsm_imaginify"></CldUploadWidget>;
};

export default MediaUploader;
