const baseURL = "https://learn.codeit.kr/5327";

export async function getReviews({
  order = "createAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`${baseURL}/film-reviews?${query}`);

  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function createReview(formData) {
  const response = await fetch(`${baseURL}/film-reviews`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function updateReview(id, formData) {
  const response = await fetch(`${baseURL}/film-reviews/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("리뷰를 수정하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function deleteReview(id) {
  const response = await fetch(`${baseURL}/film-reviews/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("리뷰를 삭제하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
