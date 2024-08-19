const checkValidFile = (file: any) => {
    const acceptedTypes = ["jpg", "jpeg", "png", "svg", "gif", "psd", "ai"];
    const fileType = file?.type?.split("/")[1];
    const fileSizeKB = Math.floor(file?.size / 1024);
    // console.log(fileSizeKB)
    // console.log(fileType);
    if (acceptedTypes.includes(fileType) && fileSizeKB < 200) {
        return true;
    }
    return false;
};
export default checkValidFile;
export const imgErrorMsg = "Image must be within 200kb and jpg/jpeg/png/svg/gif/psd"
