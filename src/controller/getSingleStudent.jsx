export default async function getSingleStudent(id) {
  try {
    const response = await fetch(`http://localhost:3000/api//kadsubeb_api/${id}`, {
      cache: "no-store",
    });
    const user = await response.json();
    return user.data;
  } catch (error) {
    console.log(error);
  }
}
