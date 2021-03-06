var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Long-term trend</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend1')\">1. Linear trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many time series steadily increase or decrease over time and a linear model may describe the trend. This kind of model can be fitted by least squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend2')\">2. Quadratic trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the trend is nonlinear, a quadratic model might describe the trend better and can also be fitted by least squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend3')\">3. Forecasting</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Linear and quadratic models can be used to forecast future values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend4')\">4. Polynomial trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If a quadratic model does not adequately describe a nonlinear trend, it is possible to add higher powers of time to the model. These polynomial models may give a smooth picture of past trend but should not be used to forecast into the future.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend5')\">5. Detrending a time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Polynomial models are only useful to describe a smooth long-term trend in a time series. A time series plot of least squares residuals (actual values minus trend) highlights shorter-term movements in the series.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
