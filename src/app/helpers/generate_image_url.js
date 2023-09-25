/**
 * Generates a URL for an image based on the given filename, collection ID, and record ID.
 *
 * @param {string} collectionId - The ID of the collection the image belongs to.
 * @param {string} recordId - The ID of the record the image belongs to.
 * @param {string} filename - The name of the image file.
 * @return {string} - The URL for the image.
 */
export default function generateImageUrl(collectionId, recordId, filename) {
  return `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${recordId}/${filename}`;
}
