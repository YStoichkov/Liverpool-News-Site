import { useEffect, useState, React } from 'react'
import { Image } from 'cloudinary-react';
import Loading from '../components/Loading';
import { isAuth } from '../hoc/isAuth.js'

const Gallery = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [imageIds, setImageIds] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };  


    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);

    }
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) {
            return;
        }
        uploadImage(previewSource);
    }
    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('http://localhost:3001/gallery/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(res => {
                window.location.reload();
            })
        } catch (error) {
            console.error(error);
        }
    }
    const loadImage = async () => {
        try {
            const res = await fetch('/gallery/images');
            const data = await res.json();
            setImageIds(data);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        loadImage()
    }, []);

    return (
        <>
            <div className="upload-image">
                <h1 className="center" ><font face="Brush Script MT" size="+7">Upload Image</font></h1>
                <form onSubmit={handleSubmitFile} className="upload-image-form">
                    <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} className="form-input" />
                    <button className="btn" type="submit">Submit image</button>
                </form>
                {previewSource && (
                    <>
                        <h3 className="center" ><font face="Brush Script MT" size="+7">Preview Image</font></h3>
                        <img className="image-preview" src={previewSource} alt="chosen" style={{ height: '300px' }} />
                    </>
                )}
            </div>
            <h1 className="center" ><font face="Brush Script MT" size="+7">All Gallery Images</font></h1>
            <div className="container">
                <div className="grid">
                    {isLoading === true
                        ? <Loading />
                        : imageIds.map((imageId, index) =>
                            <Image key={index} cloudName="dqj4zmx97" publicId={imageId} width="300" crop="scale" alt="image" />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default isAuth(Gallery);