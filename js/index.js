//@ts-check
console.log(
  '%c' +
    ' __      __  ______   __  __   ______     ' +
    '\n' +
    '/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    ' +
    '\n' +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    '\n' +
    ' \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    ' +
    '\n' +
    '  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ ' +
    '\n' +
    '   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ ' +
    '\n' +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  'color: #d81b60; font-size: 16px; font-weight: bold;'
);

function qs(selector, scope = document) {
  if (!selector) throw 'no selector';

  return scope.querySelector(selector);
}

const commentInput = qs('.comment-input', document);
const commentList = qs('#comment-list');
const commentCancelButton = qs('.comment-cancel-button');
const commentSubmitButton = qs('.comment-submit-button');

function handleCommentFormSubmit(event) {
  event.preventDefault();

  const commentContent = commentInput.value;
  if (!commentContent.trim()) return;

  const commentTemplate = `
    <div class="comment-item">
      <div class="comment-author">
        <img
          src="./images/comment-author-icon.png"
          alt="사용자 프로필 이미지"
        />
        <span>방문자</span>
      </div>
      <div class="comment-content">
        ${commentContent}
      </div>
    </div>
  `;

  const commentItem = document.createElement('li');
  commentItem.innerHTML = commentTemplate;
  commentList.appendChild(commentItem);

  commentInput.value = '';
}

function handleCancelButtonClick() {
  commentInput.value = '';
  console.log('cancel');
}

commentCancelButton.addEventListener('click', handleCancelButtonClick);
commentSubmitButton.addEventListener('click', handleCommentFormSubmit);

commentSubmitButton.addEventListener('submit', handleCommentFormSubmit);
