module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align:center;">
          <h3>We'd like your input</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="/">Yes</a>
          </div>
          <div>
            <a href="/">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
