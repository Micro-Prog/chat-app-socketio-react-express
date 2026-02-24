import { v2 as cloudinary } from 'cloudinary';
import logger from '../../utils/logger.js';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 
/**
 * Upload a file buffer or file path to cloudinary
 * @param {string} filePathOrBuffer - Local path or base64 data URI
 * @param {string} folder - Destination folder inside your Cloudinary account
 * @returns {Promise<object>} Cloudinary upload result
 * */
export const uploadToCloudinary = async (filePathOrBuffer, folder = "chatapp") => {
    try {
        const result = await cloudinary.uploader.upload(filePathOrBuffer, {
            folder,
            resource_type: "auto",
        });
        return result;
    } catch (error) {
        logger.error("Cloudinary upload error:", error);
        throw error;
    }
};

// 
/**
 * Delete a file from cloudinary by its public_id
 * @param {string} publicId
// 
*/
export const deleteFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        logger.error("Cloudinary delete error:", error);
        throw error;
    }

};


export default uploadToCloudinary; 





