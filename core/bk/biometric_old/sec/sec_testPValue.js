var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.gif' width='31' height='31'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.gif' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Properties of p-values</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Understanding the properties of p-values allows you to interpret the results of a wide range of hypothesis tests, even if you do not know the details of how the p-values were obtained.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue1')\">1. Null and alternative hypotheses</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Hypothesis tests ask whether the sample data are consistent with a statement about the parameters called the null hypothesis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue_b2')\">2. Consistency with null hypothesis</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>A p-value is a numerical measure of whether the sample data are consistent with the null hypothesis.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue3')\">3. Distribution of p-values</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>When the null hypothesis is true, any p-value between 0 and 1 is equally likely. When the alternative hypothesis is true, p-values near 0 are more likely. A p-value near 0 therefore gives evidence that the alternative hypothesis holds.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue4')\">4. Interpretation of a p-value</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>A p-value is the probability of getting such 'extreme' data when the null hypothesis holds.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPValue_b5')\">5. P-values for other tests</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>P-values have the same properties and interpretation for all tests. A test for whether a population has a normal distribution is used as an example.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
