
addBook('bk/agExper', 'book_splash', "About this CAST e-book");

addChapter('bk/general', 'ch_preface', "Preface", null, 'v_ch_preface');
addSection('bk/general', 'sec_aboutCast', "About CAST");
addPage_2('en/aboutCast', 'aboutCast1', "What is CAST?", 'static');
addPage_2('en/aboutCast', 'aboutCast2', "Structure and navigation", 'static');
addPage_2('en/aboutCast', 'aboutCast3', "Copyright and licence", 'static');
addPage_2('en/aboutCast', 'aboutCast4', "Acknowledgements", 'static');
addPage_2('en/aboutCast', 'aboutCast5', "About the author", 'static');
addSection('bk/general', 'sec_otherInfo', "Other Information");
addPage_2('en/otherInfo', 'otherInfo1', "Browsers and Java", 'static');
addPage_2('en/otherInfo', 'otherInfo2', "Problems?", 'static');
addPage_2('en/otherInfo', 'otherInfo3', "Printing", 'static');
addPage_2('en/otherInfo', 'otherInfo4', "Recent changes to CAST", 'static');
addPage_2('en/otherInfo', 'otherInfo5', "Possible future developments", 'static');

addChapter('bk/agExper', 'ch_intro', "Introduction");
addSection('bk/agExper', 'sec_expIntro', "Surveys and experiments");
addPage_2('en/expIntro', 'expIntro1', "Surveys and other samples", 'static');
addPage_2('en/expIntro', 'expIntro2', "Causal relationships", 'static');
addPage_2('en/expIntro', 'expIntro3', "Observational data and relationships", 'interact');
addPage_2('en/expIntro', 'expIntro4', "Experiments", 'interact');
addPage_2('en/expIntro', 'expIntro5', "Experiments and causal relationships", 'static');
addSection('bk/agExper', 'sec_practicalIssues', "Practical issues in design");
addPage_2('en/practicalIssues', 'practicalIssues1', "Problem and objectives", 'static');
addPage_2('en/practicalIssues', 'practicalIssues2', "Experiment or survey?", 'static');
addPage_2('en/practicalIssues', 'practicalIssues3', "Measurements", 'static');
addPage_2('en/practicalIssues', 'practicalIssues4', "Difficulties with human subjects", 'static');
addSection('bk/agExper', 'sec_expPrinciples', "Principles of experimental design");
addPage_2('en/designIntro', 'designIntro1', "Experiments and treatments", 'static');
addPage_2('en/expPrinciples', 'expPrinciples2', "Variable experimental units", 'interact');
addPage_2('en/expPrinciples', 'expPrinciples3', "A badly designed experiment", 'interact');
addPage_2('en/designIntro', 'designIntro4', "Confounding", 'static');
addPage_2('en/expPrinciples', 'expPrinciples5', "Randomisation", 'interact');
addPage_2('en/designIntro', 'designIntro6', "Replication", 'static');
addPage_2('en/designIntro', 'designIntro7', "Blocking", 'interact');
addSection('bk/agExper', 'sec_normalModel', "Modelling variation");
addPage_2('en/normalModel', 'normalModel1', "Explained and unexplained variation", 'static');
addPage_2('en/normalModel', 'normalModel2', "Modelling variation", 'static');
addPage_2('en/normalModel', 'normalModel3', "Normal model for the response", 'interact');
addPage_2('en/normalModel', 'normalModel4', "Parameter estimation", 'static');

addChapter('bk/agExper', 'ch_oneFactor', "Experiments with one factor");
addSection('bk/agExper', 'sec_oneFactorIntro', "Introduction");
addPage_2('en/oneFactorIntro', 'oneFactorIntro1', "Recap of notation", 'static');
addPage_2('en/oneFactorIntro', 'oneFactorIntro2', "Experiments in practice", 'static');
addPage_2('en/oneFactorIntro', 'oneFactorIntro_b3', "Simple experiments", 'static');
addSection('bk/agExper', 'sec_oneFactor', "Design and estimates");
addPage_2('en/oneFactor', 'oneFactor1', "Completely randomised experiment", 'interact');
addPage_2('en/oneFactor', 'oneFactor_b2', "Treatment means", 'interact');
addPage_2('en/oneFactor', 'oneFactor3', "Normal model for variation", 'static');
addPage_2('en/oneFactor', 'oneFactor4', "Describing unexplained variation", 'interact');
addPage_2('en/oneFactor', 'oneFactor5', "Confidence intervals for treatment means", 'interact');
addSection('bk/agExper', 'sec_oneFactorAnova', "Analysis of variance");
addPage_2('en/oneFactorAnova', 'oneFactorAnova1', "Variation between and within treatments", 'interact');
addPage_2('en/oneFactorAnova', 'oneFactorAnova2', "Sums of squares", 'interact');
addPage_2('en/oneFactorAnova', 'oneFactorAnova_b3', "Coefficient of determination", 'static');
addPage_2('en/oneFactorAnova', 'oneFactorAnova4', "Test for differences between levels", 'interact');
addPage_2('en/oneFactorAnova', 'oneFactorAnova_b5', "Examples", 'static');

addChapter('bk/agExper', 'ch_manyFactors', "Multiple factors");
addSection('bk/agExper', 'sec_factorialTwo', "Designs for two factors");
addPage_2('en/factorialTwo', 'factorialTwo1', "Factorial design for two factors", 'interact');
addPage_2('en/factorialTwo', 'factorialTwo2', "Examples of factorial experiments", 'static');
addPage_2('en/factorialTwo', 'factorialTwo3', "Interaction between factors", 'interact');
addPage_2('en/factorialTwo', 'factorialTwo4', "Efficiency", 'interact');
addSection('bk/agExper', 'sec_twoFactorModel', "Model and parameters");
addPage_2('en/twoFactorModel', 'twoFactorModel1', "Normal model for two factors", 'interact');
addPage_2('en/twoFactorModel', 'twoFactorModel_b2', "Additive model for treatment means", 'interact');
addPage_2('en/twoFactorModel', 'twoFactorModel3', "Parameterisations for model with one factor", 'interact');
addPage_2('en/twoFactorModel', 'twoFactorModel_b4', "Parameters for two factor model", 'interact');
addSection('bk/agExper', 'sec_twoFactorAnova', "Analysis of variance");
addPage_2('en/twoFactorAnova', 'twoFactorAnova_b1', "Do the factors affect the response?", 'interact');
addPage_2('en/twoFactorAnova', 'twoFactorAnova_b2', "Sequence of models", 'interact');
addPage_2('en/twoFactorAnova', 'twoFactorAnova_b3', "Explained sums of squares", 'interact');
addPage_2('en/twoFactorAnova', 'twoFactorAnova_b4', "Sum of squares table", 'interact');
addPage_2('en/twoFactorAnova', 'twoFactorAnova_b5', "Analyisis of variance tests", 'interact');
addPage_2('en/twoFactorAnova', 'twoFactorAnova6', "Formulae", 'static');
addSection('bk/agExper', 'sec_factorInteract', "Interaction between factors");
addPage_2('en/factorInteract', 'factorInteract_b1', "Model without interaction", 'interact');
addPage_2('en/factorInteract', 'factorInteract_b2', "Interaction between factors", 'interact');
addPage_2('en/factorInteract', 'factorInteract_b3', "Interaction sum of squares", 'interact');
addPage_2('en/factorInteract', 'factorInteract_b4', "Test for interaction", 'interact');
addPage_2('en/factorInteract', 'factorInteract5', "Reporting results", 'interact');
addPage_2('en/factorInteract', 'factorInteract6', "Experiments with a single replicate", 'interact');
addPage_2('en/factorInteract', 'factorInteract7', "Tranformations and interaction", 'interact');
addSection('bk/agExper', 'sec_factorial', "Experiments for many factors");
addPage_2('en/factorial', 'factorial_b1', "Factorial design for three factors", 'interact');
addPage_2('en/factorial', 'factorial_b2', "Model without interaction", 'interact');
addPage_2('en/factorial', 'factorial_b3', "Interactions", 'interact');
addPage_2('en/factorial', 'factorial_b4', "Sums of squares and degrees of freedom", 'interact');
addPage_2('en/factorial', 'factorial_b5', "Analysis of variance", 'interact');
addPage_2('en/factorial', 'factorial6', "Summarising the model", 'interact');
addPage_2('en/factorial', 'factorial7', "Experiments with a single replicate", 'interact');
addPage_2('en/factorial', 'factorial8', "Four or more factors", 'static');

addChapter('bk/agExper', 'ch_blocks', "Blocks");
addSection('bk/agExper', 'sec_blockIntro', "Introduction to blocks");
addPage_2('en/blockIntro', 'blockIntro1', "Variability of experimental units", 'interact');
addPage_2('en/blockIntro', 'blockIntro2', "Blocks of similar experimental units", 'static');
addPage_2('en/blockIntro', 'blockIntro3', "Intentional variation in experimental units", 'static');
addPage_2('en/blockIntro', 'blockIntro4', "Blocks and replicates", 'static');
addSection('bk/agExper', 'sec_paired', "Paired data");
addPage_2('en/paired', 'paired1', "Randomised blocks with pairs", 'interact');
addPage_2('en/paired', 'paired2', "Matched pairs", 'interact');
addPage_2('en/paired', 'paired3', "Analysis of differences", 'interact');
addPage_2('en/paired', 'paired4', "Inference about differences", 'interact');
addSection('bk/agExper', 'sec_oneBlock', "Randomised blocks");
addPage_2('en/oneBlock', 'oneBlock1', "Randomised block design", 'interact');
addPage_2('en/oneBlock', 'oneBlock2', "Randomised block examples", 'static');
addPage_2('en/oneBlock', 'oneBlock3', "Comparison of designs", 'interact');
addPage_2('en/oneBlock', 'oneBlock4', "Confidence intervals for differences", 'interact');
addPage_2('en/oneBlock', 'oneBlock5', "Removing block effects", 'interact');
addSection('bk/agExper', 'sec_oneBlockAnova', "Anova for randomised blocks");
addPage_2('en/oneBlockAnova', 'oneBlockAnova1', "Model for randomised blocks", 'interact');
addPage_2('en/oneBlockAnova', 'oneBlockAnova2', "Explained sums of squares", 'interact');
addPage_2('en/oneBlockAnova', 'oneBlockAnova3', "Removing the block effect", 'interact');
addPage_2('en/oneBlockAnova', 'oneBlockAnova4', "Removing block and factor effects", 'interact');
addPage_2('en/oneBlockAnova', 'oneBlockAnova5', "Anova table and examples", 'static');
addPage_2('en/oneBlockAnova', 'oneBlockAnova6', "Model assumptions and trandformation", 'static');
addPage_2('en/oneBlockAnova', 'oneBlockAnova7', "Confidence intervals for treatment means", 'interact');
addSection('bk/agExper', 'sec_blockInteract', "Interaction between blocks and factor");
addPage_2('en/blockInteract', 'blockInteract1', "Varying factor effect", 'interact');
addPage_2('en/blockInteract', 'blockInteract2', "Interaction sums of squares", 'interact');
addPage_2('en/blockInteract', 'blockInteract3', "Anova test for interaction", 'interact');
addSection('bk/agExper', 'sec_blockFactors', "Two or more factors");
addPage_2('en/blockFactors', 'blockFactors1', "Randomised blocks and treatments", 'interact');
addPage_2('en/blockFactors', 'blockFactors2', "Analysis of variance", 'interact');

addChapter('bk/agExper', 'ch_treatments', "More about treatments");
addSection('bk/agExper', 'sec_contrasts', "Contrasts and constraints");
addPage_2('en/contrasts', 'contrasts1', "Treatments and factors", 'interact');
addPage_2('en/contrasts', 'contrasts2', "Defining models with constraints", 'interact');
addPage_2('en/contrasts', 'contrasts3', "Comparing a control to other treatments", 'interact');
addPage_2('en/contrasts', 'contrasts4', "Analysis of variance for constraints", 'interact');
addPage_2('en/contrasts', 'contrasts5', "Comparing groups of treatments", 'interact');
addPage_2('en/contrasts', 'contrasts6', "Comparisons in block designs", 'interact');
addPage_2('en/contrasts', 'contrasts7', "Estimating contrasts", 'interact');
addSection('bk/agExper', 'sec_oneFactorNum', "Numerical factors");
addPage_2('en/oneFactorNum', 'oneFactorNum1', "One factor with numerical levels", 'interact');
addPage_2('en/oneFactorNum', 'oneFactorNum2', "Linear and quadratic models", 'interact');
addPage_2('en/oneFactorNum', 'oneFactorNum3', "Terms and constraints", 'static');
addPage_2('en/oneFactorNum', 'oneFactorNum4', "Explained sums of squares", 'interact');
addPage_2('en/oneFactorNum', 'oneFactorNum5', "Anova table and tests", 'interact');
addPage_2('en/oneFactorNum', 'oneFactorNum6', "Equivalence of models", 'interact');
addPage_2('en/oneFactorNum', 'oneFactorNum7', "Numerical factors in other designs", 'interact');
addPage_2('en/oneFactorNum', 'oneFactorNum8', "Response surface models", 'interact');
addSection('bk/agExper', 'sec_multiComp', "Multiple comparisons");
addPage_2('en/multiComp', 'multiComp1', "Problems with multiple tests", 'interact');
addPage_2('en/multiComp', 'multiComp2', "Which means are different?", 'interact');
addPage_2('en/multiComp', 'multiComp3', "Multiple comparisons", 'interact');
addPage_2('en/multiComp', 'multiComp4', "Comparisons in randomised block designs", 'interact');
addPage_2('en/multiComp', 'multiComp5', "Warning: Are multiple comparisons necessary?", 'static');
addSection('bk/agExper', 'sec_unequalReps', "Unequal replicates");
addPage_2('en/unequalReps', 'unequalReps1', "Missing values with a single factor", 'interact');
addPage_2('en/unequalReps', 'unequalReps2', "Unequal replicates by design", 'interact');
addPage_2('en/unequalReps', 'unequalReps3', "Orthogonal designs for two factors", 'interact');
addPage_2('en/unequalReps', 'unequalReps4', "Anova for non-orthogonal factors", 'interact');
addPage_2('en/unequalReps', 'unequalReps5', "Orthogonal factor and blocks", 'static');
addPage_2('en/unequalReps', 'unequalReps6', "Missing treatments and confounding", 'static');
addSection('bk/agExper', 'sec_covariates', "Covariates");
addPage_2('en/covariates', 'covariates1', "Variability in experimental units", 'static');
addPage_2('en/covariates', 'covariates_b2', "Effect of unmodelled covariate", 'interact');
addPage_2('en/covariates', 'covariates_b3', "Model for numerical covariate", 'interact');
addPage_2('en/covariates', 'covariates_b4', "Inference with covariates", 'interact');
addPage_2('en/covariates', 'covariates_b5', "Blocks and covariates", 'interact');
addPage_2('en/covariates', 'covariates6', "Categorical covariates (cofactors)", 'interact');
addPage_2('en/covariates', 'covariates7', "Recovery from bad design", 'interact');

addChapter('bk/agExper', 'ch_incompleteDesigns', "Incomplete designs");
addSection('bk/agExper', 'sec_missing', "Missing treatments");
addPage_2('en/missing', 'missing1', "Parameters that cannot be estimated", 'interact');
addPage_2('en/missing', 'missing2', "Inference with missing treatments", 'interact');
addPage_2('en/missing', 'missing3', "Missing treatments in block designs", 'interact');
addSection('bk/agExper', 'sec_latinSqr', "Latin square designs");
addPage_2('en/latinSqr', 'latinSqr1', "Pairwise orthogonality", 'interact');
addPage_2('en/latinSqr', 'latinSqr2', "Latin squares", 'interact');
addPage_2('en/latinSqr', 'latinSqr3', "Treatment structure in Latin squares", 'interact');
addPage_2('en/latinSqr', 'latinSqr4', "Randomisation for Latin squares", 'interact');
addPage_2('en/latinSqr', 'latinSqr5', "Designs based on Latin squares", 'static');
addPage_2('en/latinSqr', 'latinSqr6', "Graeco-Latin squares", 'static');
addSection('bk/agExper', 'sec_screening', "2**n designs with one replicate");
addPage_2('en/screening', 'screening1', "Two-level factors and one replicate", 'static');
addPage_2('en/screening', 'screening2', "Factors with two levels", 'static');
addPage_2('en/screening', 'screening3', "Interactions", 'static');
addPage_2('en/screening', 'screening4', "Hypothesis tests", 'interact');
addSection('bk/agExper', 'sec_fractional', "Fractional factorial designs");
addPage_2('en/fractional', 'fractional1', "Orthogonal main effects", 'static');
addPage_2('en/fractional', 'fractional2', "Confounded main effects and interactions", 'static');
addPage_2('en/fractional', 'fractional3', "Design principles", 'interact');
addPage_2('en/fractional', 'fractional4', "Another fractional factorial design", 'interact');
addPage_2('en/fractional', 'fractional5', "Factors with more than two levels", 'static');
addSection('bk/agExper', 'sec_fractionalBlock', "Fractional designs in blocks");
addPage_2('en/fractionalBlock', 'fractionalBlock1', "Factorial experiments in two blocks", 'interact');
addPage_2('en/fractionalBlock', 'fractionalBlock2', "Partial confounding", 'interact');
addPage_2('en/fractionalBlock', 'fractionalBlock3', "Factorial experiments in four blocks", 'interact');
addSection('bk/agExper', 'sec_incomplete', "Incomplete block designs");
addPage_2('en/incomplete', 'incomplete1', "Balance in block designs", 'interact');
addPage_2('en/incomplete', 'incomplete2', "Balanced incomplete block designs", 'interact');
addPage_2('en/incomplete', 'incomplete3', "Adjusted treatment means", 'interact');
addPage_2('en/incomplete', 'incomplete4', "Balanced lattice designs", 'interact');
addPage_2('en/incomplete', 'incomplete5', "Simple lattice designs", 'interact');
addPage_2('en/incomplete', 'incomplete6', "Randomisation", 'interact');

addChapter('bk/agExper', 'ch_randomBlocks', "Multi-level designs");
addSection('bk/agExper', 'sec_nested', "Nested experiments");
addPage_2('en/nested', 'nested1', "Nested design: a factor at block level", 'static');
addPage_2('en/nested', 'nested2', "Sums of squares for nested design", 'interact');
addPage_2('en/nested', 'nested3', "Anova for nested design", 'interact');
addPage_2('en/nested', 'nested4', "More levels of nesting", 'interact');
addPage_2('en/nested', 'nested5', "Analysis of block totals or means", 'static');
addPage_2('en/nested', 'nested6', "More blocks or more measurements per block?", 'static');
addSection('bk/agExper', 'sec_splitPlot', "Split plot designs");
addPage_2('en/splitPlot', 'splitPlot1', "Split plot design", 'static');
addPage_2('en/splitPlot', 'splitPlot2', "Anova for split plot design", 'interact');
addPage_2('en/splitPlot', 'splitPlot3', "Interaction between factors", 'interact');
addPage_2('en/splitPlot', 'splitPlot4', "Summarising factor effects", 'interact');
addPage_2('en/splitPlot', 'splitPlot5', "Three levels of blocking", 'interact');
addPage_2('en/splitPlot', 'splitPlot6', "Another example", 'interact');
addPage_2('en/splitPlot', 'splitPlot7', "Design issues", 'interact');
addSection('bk/agExper', 'sec_bibInter', "Information at two levels");
addPage_2('en/bibInter', 'bibInter1', "Information at block and unit levels", 'interact');
addPage_2('en/bibInter', 'bibInter2', "Intra- and inter-block estimates", 'interact');
addPage_2('en/bibInter', 'bibInter3', "Combining estimates", 'interact');
addPage_2('en/bibInter', 'bibInter4', "Another example", 'interact');
addPage_2('en/bibInter', 'bibInter5', "Analysis of variance", 'interact');

addChapter('bk/agExper', 'ch_anovaTheory', "Anova theory (advanced)");
addSection('bk/regn', 'sec_ssq', "Distribution of variance");
addPage_2('en/ssq', 'ssq1', "Distribution of Z-squared", 'interact');
addPage_2('en/ssq', 'ssq2', "Sums of squares", 'interact');
addPage_2('en/ssq', 'ssq3', "Sum of squares about sample mean", 'interact');
addPage_2('en/ssq', 'ssq4', "Sums of squares tables", 'interact');
addPage_2('en/ssq', 'ssq5', "Ratio of variances and F distribution", 'interact');
addPage_2('en/ssq', 'ssq6', "Overview of analysis of variance", 'static');
addPage_2('en/ssq', 'ssq7', "Summary of anova distributions", 'static');
addSection('bk/regn', 'sec_varianceInf', "Inference for variances (optional)");
addPage_2('en/varianceInf', 'varianceInf1', "Confidence interval for the variance", 'interact');
addPage_2('en/varianceInf', 'varianceInf2', "Properties of the confidence interval", 'interact');
addPage_2('en/varianceInf', 'varianceInf3', "Warning about CI for variance", 'interact');
addPage_2('en/varianceInf', 'varianceInf4', "Independence of mean and variance", 'interact');
addPage_2('en/varianceInf', 'varianceInf5', "Model and hypotheses", 'interact');
addPage_2('en/varianceInf', 'varianceInf6', "Test statistic", 'interact');
addPage_2('en/varianceInf', 'varianceInf7', "F test", 'static');

var language = "en";
var logoGif = null;
var homeDir = "bk/agExper";
var versionGif = "images/castAgExper";
var isLecturingVersion = false;
var isModule = false;
var hasSummaries = false;
var hasVideos = false;
var summaryPdfUrl = null;
var castWebServerUrl = "http://castBeta.massey.ac.nz";
var noOfChapters = "9";

var localVideos = true;

var fullTextString = 'Text';
var summaryTextString = 'In brief';
var videoTextString = 'Video';
var appletTextString = 'Text';
fullTabTooltip = 'Text version of page';
summaryTabTooltip = 'Summarised version of page';
videoTabTooltip = 'Version of page with videos';
appletTabTooltip = 'Text version of page with interaction';
var chapterString = 'Chapter';

var versionName = {'_g': 'General', '_b': 'Biometric', '_c': 'Business', '_i': 'Industrial'};
var versions = {};
versions['designIntro1'] = new Array('_g', '_b', '_c');
versions['designIntro4'] = new Array('_g', '_c');
versions['designIntro7'] = new Array('_g', '_c');
versions['oneFactorIntro3'] = new Array('_b', '_g');
versions['oneFactor2'] = new Array('_b', '_g');
versions['oneFactorAnova3'] = new Array('_b', '_g');
versions['oneFactorAnova5'] = new Array('_b', '_g');
versions['factorialTwo1'] = new Array('_g', '_i');
versions['factorialTwo2'] = new Array('_g', '_i');
versions['twoFactorModel2'] = new Array('_b', '_g', '_i');
versions['twoFactorModel4'] = new Array('_b', '_g');
versions['twoFactorAnova1'] = new Array('_b', '_g');
versions['twoFactorAnova2'] = new Array('_b', '_g', '_i');
versions['twoFactorAnova3'] = new Array('_b', '_g', '_i');
versions['twoFactorAnova4'] = new Array('_b', '_g');
versions['twoFactorAnova5'] = new Array('_b', '_g', '_i');
versions['factorInteract1'] = new Array('_b', '_g', '_i');
versions['factorInteract2'] = new Array('_b', '_g', '_i');
versions['factorInteract3'] = new Array('_b', '_g');
versions['factorInteract4'] = new Array('_b', '_g', '_i');
versions['factorInteract6'] = new Array('_g', '_i');
versions['factorial1'] = new Array('_b', '_g');
versions['factorial2'] = new Array('_b', '_g');
versions['factorial3'] = new Array('_b', '_g');
versions['factorial4'] = new Array('_b', '_g');
versions['factorial5'] = new Array('_b', '_g');
versions['covariates2'] = new Array('_b', '_g');
versions['covariates3'] = new Array('_b', '_g');
versions['covariates4'] = new Array('_b', '_g');

bookLoaded = true;