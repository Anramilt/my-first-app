import React, { useState } from "react";
import "./FileManager.module.css"


const FileManager = () => {
  const [images, setImages] = useState([]); // Список изображений
  const [selectedImage, setSelectedImage] = useState(""); // Конкретное изображение
  const [file, setFile] = useState(null); // Файл для загрузки
  const [error, setError] = useState(""); // Ошибки

  // Получение списка всех изображений или конкретной картинки
  const handleGetImages = async () => {
    if (!selectedImage) {
      try {
        const response = await fetch("http://localhost:8080/files");
        if (!response.ok) throw new Error("Ошибка загрузки списка изображений");

        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setImages([]); // Очищаем список при загрузке конкретного файла
    }
  };

  const handleGetImage = async () => {
    if (selectedImage.trim() === "") {
      setError("Введите название изображения");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/images?name=${encodeURIComponent(selectedImage)}`);
      if (!response.ok) throw new Error("Файл не найден");

      setImages([]); // Очищаем список
      setError(""); // Очищаем ошибку
      setSelectedImage(URL.createObjectURL(await response.blob())); // Отображаем изображение
    } catch (err) {
      setError(err.message);
    }
  };

  // Загрузка изображения
  const handleUpload = async () => {
    if (!file) {
      setError("Выберите файл для загрузки");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/files", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Ошибка загрузки файла");

      setError("");
      alert("Файл успешно загружен!");
      setFile(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="file-manager">
      <h2>Файловый менеджер</h2>

      {/* Поле ввода для конкретного изображения */}
      <input
        type="text"
        placeholder="Введите название изображения"
        value={selectedImage}
        onChange={(e) => setSelectedImage(e.target.value)}
      />
      <button onClick={handleGetImages}>Получить все изображения</button>
      <button onClick={handleGetImage}>Получить изображение</button>

      {/* Загрузка изображения */}
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Загрузить</button>

      {/* Ошибки */}
      {error && <p className="error">{error}</p>}

      {/* Список изображений */}
      {images.length > 0 && (
        <div className="image-list">
          {images.map((img, index) => (
            <p key={index}>{img}</p>
          ))}
        </div>
      )}

      {/* Просмотр загруженного изображения */}
      {selectedImage && <img src={selectedImage} alt="Выбранное изображение" />}
    </div>
  );
};

export default FileManager;
