import { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react';

export function Gallery() {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [imageIds, setImageIds] = useState('');

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
            await fetch('/gallery/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: {
                    'Content-type': 'application/json'
                }
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
    }
    useEffect(() => {
        loadImage()
    }, []);

    console.log(imageIds)

    return (
        <>
            <div>
                <h1>Upload Image</h1>
                <form onSubmit={handleSubmitFile} className="form">
                    <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} className="form-input" />
                    <button className="btn" type="submit">Submit image</button>
                </form>
                {previewSource && (
                    <img src={previewSource} alt="chosen image" style={{ height: '300px' }} />
                )}
            </div>
            {/* <div className="loader"></div> */}
            <div className="container">
                <div className="grid">
                    {imageIds && imageIds.map((imageId, index) =>
                        <Image
                            key={index}
                            cloudName="dqj4zmx97"
                            publicId={imageId}
                            width="300"
                            crop="scale"
                        />
                    )}
                </div>
            </div>
        </>
    )
}