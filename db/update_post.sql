UPDATE posts

SET title = $1,
img = $2,
content = $3,
author_id = $4

WHERE id = $5