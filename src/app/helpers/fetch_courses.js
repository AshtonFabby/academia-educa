/**
 *  Fetches courses from PocketBase
 * @param {string} categoryId - The id of the category
 * @returns {Promise} Promise with the courses
 */
export default async function fetchCourses(categoryId) {
  const courses = await fetch(
    `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/collections/categories/records/${categoryId}?expand=courses`
  );
  if (!courses.ok) {
    throw new Error("Failed to fetch data");
  }

  return courses.json();
}
