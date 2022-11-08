function resizeCloudnaryImg(url, parameter) {
    return url.replace("/upload", `/upload/${parameter}`);
}

export default function Thumbnail({ url, size }) {
    return <img src={`${resizeCloudnaryImg(url, size)}`} alt="thumbnail" />;
}
