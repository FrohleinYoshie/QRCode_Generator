package main

import (
	"encoding/base64"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/skip2/go-qrcode"
)

type URLRequest struct {
	URL string `json:"url" binding:"required"`
}

func main() {
	r := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}
	r.Use(cors.New(config))

	r.POST("/generate-qr", func(c *gin.Context) {
		var req URLRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// QRコードの生成
		qr, err := qrcode.Encode(req.URL, qrcode.Medium, 256)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate QR code"})
			return
		}

		// Base64エンコード
		base64Encoding := base64.StdEncoding.EncodeToString(qr)
		dataURI := "data:image/png;base64," + base64Encoding

		c.JSON(http.StatusOK, gin.H{
			"qr_data": dataURI,
			"url":     req.URL,
		})
	})

	r.Run(":8080")
}
