import React, { useState, useRef } from 'react';
import axios from 'axios';
import './QRGenerator.css';

const QRGenerator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [qrData, setQrData] = useState('');
  const qrRef = useRef<HTMLImageElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/generate-qr', { url });
      setQrData(response.data.qr_data);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const handleCopyImage = async () => {
    if (qrRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = qrRef.current.width;
      canvas.height = qrRef.current.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(qrRef.current, 0, 0);
        canvas.toBlob(async (blob) => {
          if (blob) {
            try {
              await navigator.clipboard.write([
                new ClipboardItem({
                  'image/png': blob
                })
              ]);
              alert('コピーしたよ');
            } catch (err) {
              console.error('Failed to copy image: ', err);
              alert('失敗したよ');
            }
          }
        }, 'image/png');
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrData;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="qr-generator">
      <h1>QRコードの作成</h1>
      <form onSubmit={handleSubmit} className="qr-form">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URLを入力"
          required
          className="qr-input"
        />
        <button type="submit" className="qr-button">生成</button>
      </form>
      {qrData && (
        <div className="qr-result">
          <img ref={qrRef} src={qrData} alt="QR Code" className="qr-image" />
          <div className="qr-actions">
            <button onClick={handleCopyImage} className="qr-action-button">コピー</button>
            <button onClick={handleDownload} className="qr-action-button">ダウンロード</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;