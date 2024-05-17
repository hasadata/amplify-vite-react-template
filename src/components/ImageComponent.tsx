
const ImageComponent = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <div>
            <img width={400} src={src} alt={alt} />
        </div>
    );
};

export default ImageComponent;
