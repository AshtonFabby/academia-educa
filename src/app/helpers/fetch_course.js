/**
 *  Fetches course from PocketBase
 * @param {string} courseId - The id of the category
 * @returns {Promise} Promise with the courses
 */
export default async function fetchCourse(courseId) {
  const courses = await fetch(
    `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/collections/courses/records/${courseId}?expand=teacher`
  );
  if (!courses.ok) {
    throw new Error("Failed to fetch data");
  }

  return courses.json();
}
