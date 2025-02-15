// Medical database for symptom-based diagnosis using keywords
const medicalDatabase = [
    { keywords: ["cough", "sore throat"], disease: "Common cold", remedy: "Get plenty of rest and stay hydrated. Over-the-counter medications may help alleviate symptoms." },
    { keywords: ["headache", "head pain"], disease: "Tension headache", remedy: "Try over-the-counter pain relievers such as aspirin, ibuprofen, or acetaminophen. Relaxation techniques may also help." },
    { keywords: ["fever", "high temperature"], disease: "Flu", remedy: "Get plenty of rest and stay hydrated. Over-the-counter fever reducers may help. Consult a doctor if symptoms persist." },
    { keywords: ["stomach pain", "abdominal pain"], disease: "Indigestion", remedy: "Avoid spicy and fatty foods. Over-the-counter antacids may help. Consult a doctor if symptoms persist or worsen." },
    // Add more symptoms and corresponding data here
    { keywords: ["rash", "skin irritation"], disease: "Contact dermatitis", remedy: "Identify and avoid the irritant. Use over-the-counter corticosteroid cream or ointment." },
    { keywords: ["fatigue", "tiredness"], disease: "Anemia", remedy: "Increase intake of iron-rich foods. Take iron supplements as directed by a healthcare provider." },
    { keywords: ["sore throat", "painful swallowing"], disease: "Strep throat", remedy: "Take prescribed antibiotics as directed by a healthcare provider. Gargle with warm salt water." },
    { keywords: ["muscle pain", "sore muscles"], disease: "Muscle strain", remedy: "Rest the affected muscle. Apply ice for the first 24 to 72 hours, then apply heat. Take over-the-counter pain relievers as needed." },
    // Add more symptoms and corresponding data here
    // Add 92 more diseases along with their keywords and remedies
    { keywords: ["chest pain", "shortness of breath"], disease: "Heart attack", remedy: "Call emergency services immediately. Chew and swallow aspirin. Begin CPR if the person is unconscious." },
    { keywords: ["abdominal pain", "bloating"], disease: "Irritable bowel syndrome (IBS)", remedy: "Increase fiber intake. Avoid trigger foods. Manage stress. Take prescribed medications as directed." },
    // Add more diseases here
    { keywords: ["joint pain", "swelling"], disease: "Arthritis", remedy: "Maintain a healthy weight. Exercise regularly. Apply hot and cold compresses. Take prescribed medications as directed." },
    { keywords: ["insomnia", "sleeplessness"], disease: "Insomnia", remedy: "Establish a regular sleep schedule. Create a comfortable sleep environment. Limit daytime naps. Practice relaxation techniques." },
    { keywords: ["dizziness", "loss of balance"], disease: "Vertigo", remedy: "Lie still in a quiet, dark room. Perform specific exercises as recommended by a healthcare provider. Take prescribed medications as directed." },
    { keywords: ["itchy eyes", "tearing"], disease: "Allergic conjunctivitis", remedy: "Avoid allergens. Use over-the-counter antihistamine eye drops. Apply cold compresses." },
    { keywords: ["memory loss", "confusion"], disease: "Alzheimer's disease", remedy: "Create a safe and supportive environment. Develop a regular routine. Provide memory aids. Seek support from healthcare professionals and support groups." },
    { keywords: ["irritability", "mood swings"], disease: "Bipolar disorder", remedy: "Attend therapy sessions. Take prescribed mood stabilizers. Establish a stable daily routine." },
    { keywords: ["thirst", "frequent urination"], disease: "Diabetes mellitus", remedy: "Monitor blood sugar levels regularly. Follow a healthy diet and exercise regimen. Take prescribed medications as directed by a healthcare provider." },
    { keywords: ["difficulty breathing", "wheezing"], disease: "Asthma", remedy: "Identify and avoid triggers. Take prescribed long-term control medications. Use a rescue inhaler as needed." },
    { keywords: ["nausea", "vomiting"], disease: "Gastroenteritis", remedy: "Stay hydrated. Gradually reintroduce bland foods. Avoid dairy products and fatty or spicy foods." },
    { keywords: ["weakness", "loss of appetite"], disease: "Chronic kidney disease", remedy: "Follow a kidney-friendly diet. Manage blood pressure. Take prescribed medications as directed by a healthcare provider." },
    { keywords: ["difficulty swallowing", "weight loss"], disease: "Esophageal cancer", remedy: "Undergo surgery, radiation therapy, and chemotherapy as recommended by an oncologist. Seek support from healthcare professionals and support groups." },
    { keywords: ["anxiety", "panic"], disease: "Panic disorder", remedy: "Attend therapy sessions. Practice relaxation techniques. Take prescribed medications as directed." },
    { keywords: ["numbness", "tingling"], disease: "Peripheral neuropathy", remedy: "Manage underlying conditions. Take prescribed medications as directed. Attend physical therapy sessions." },
    { keywords: ["difficulty walking", "muscle weakness"], disease: "Multiple sclerosis", remedy: "Attend physical therapy sessions. Take prescribed medications as directed by a healthcare provider. Seek support from healthcare professionals and support groups." },
    { keywords: ["hair loss", "thinning hair"], disease: "Androgenetic alopecia", remedy: "Use over-the-counter minoxidil. Consider prescription medications or procedures. Wear wigs or hairpieces if desired." },
    { keywords: ["excessive sweating", "night sweats"], disease: "Hyperhidrosis", remedy: "Use over-the-counter antiperspirants. Consider prescription antiperspirants or procedures. Wear moisture-wicking clothing." },
    { keywords: ["joint swelling", "joint stiffness"], disease: "Rheumatoid arthritis", remedy: "Take prescribed disease-modifying antirheumatic drugs (DMARDs). Attend physical therapy sessions. Apply hot and cold compresses." },
    { keywords: ["frequent infections", "easy bruising"], disease: "Leukemia", remedy: "Undergo chemotherapy and radiation therapy as recommended by an oncologist. Seek support from healthcare professionals and support groups." },
    { keywords: ["chest tightness", "wheezing"], disease: "Chronic obstructive pulmonary disease (COPD)", remedy: "Quit smoking. Take prescribed bronchodilators and inhaled steroids. Attend pulmonary rehabilitation sessions." },
    { keywords: ["persistent cough", "blood in sputum"], disease: "Lung cancer", remedy: "Undergo surgery, chemotherapy, and radiation therapy as recommended by an oncologist. Seek support from healthcare professionals and support groups." },
    { keywords: ["frequent heartburn", "acid reflux"], disease: "Gastroesophageal reflux disease (GERD)", remedy: "Avoid trigger foods and beverages. Eat smaller, more frequent meals. Take prescribed acid-reducing medications." },
    { keywords: ["loss of coordination", "slurred speech"], disease: "Stroke", remedy: "Call emergency services immediately. Undergo thrombolytic therapy or a mechanical thrombectomy if eligible. Attend rehabilitation therapy sessions." },
    { keywords: ["abdominal discomfort", "change in bowel habits"], disease: "Colon cancer", remedy: "Undergo surgery, chemotherapy, and radiation therapy as recommended by an oncologist. Seek support from healthcare professionals and support groups." },
    { keywords: ["red eyes", "eye discharge"], disease: "Conjunctivitis", remedy: "Practice good hygiene. Use over-the-counter or prescription eye drops. Apply cold compresses." },
    { keywords: ["joint redness", "joint warmth"], disease: "Gout", remedy: "Maintain a healthy weight. Limit alcohol and foods high in purines. Take prescribed medications as directed." },
    { keywords: ["frequent urination", "urinary urgency"], disease: "Urinary tract infection (UTI)", remedy: "Stay hydrated. Take prescribed antibiotics as directed by a healthcare provider. Practice good hygiene." },
    { keywords: ["difficulty speaking", "drooping face"], disease: "Bell's palsy", remedy: "Attend physical therapy sessions. Take prescribed corticosteroids. Protect the eye on the affected side." },
    { keywords: ["cold intolerance", "weight gain"], disease: "Hypothyroidism", remedy: "Take prescribed synthetic thyroid hormone. Follow a healthy diet and exercise regimen. Attend regular follow-up appointments." },
    { keywords: ["insufficient sleep", "excessive daytime sleepiness"], disease: "Sleep apnea", remedy: "Maintain a healthy weight. Avoid alcohol and sedatives. Use a continuous positive airway pressure (CPAP) machine as directed." },
    { keywords: ["abdominal bloating", "gas"], disease: "Lactose intolerance", remedy: "Limit or avoid dairy products. Use lactase enzyme supplements. Choose lactose-free or lactose-reduced products." },
    { keywords: ["weight loss", "fatigue"], disease: "Hyperthyroidism", remedy: "Take prescribed antithyroid medications. Follow a healthy diet and exercise regimen. Attend regular follow-up appointments." },
    { keywords: ["decreased libido", "erectile dysfunction"], disease: "Erectile dysfunction", remedy: "Quit smoking. Limit alcohol consumption. Take prescribed medications, use vacuum erection devices, or consider surgery if necessary." },
    { keywords: ["rapid heart rate", "tremor"], disease: "Hyperthyroidism", remedy: "Take prescribed antithyroid medications. Follow a healthy diet and exercise regimen. Attend regular follow-up appointments." },
    { keywords: ["persistent cough", "weight loss"], disease: "Lung cancer", remedy: "Undergo surgery, chemotherapy, and radiation therapy as recommended by an oncologist. Seek support from healthcare professionals and support groups." },
    { keywords: ["difficulty walking", "loss of balance"], disease: "Parkinson's disease", remedy: "Attend physical therapy sessions. Take prescribed medications as directed by a healthcare provider. Seek support from healthcare professionals and support groups." },
    { keywords: ["confusion", "hallucinations"], disease: "Schizophrenia", remedy: "Attend therapy sessions. Take prescribed antipsychotic medications. Create a stable and supportive environment." },
    { keywords: ["severe abdominal pain", "blood in stool"], disease: "Ulcerative colitis", remedy: "Follow a specific diet plan. Take prescribed anti-inflammatory medications. Consider surgery if necessary." },
    { keywords: ["frequent nosebleeds", "easy bruising"], disease: "Hemophilia", remedy: "Receive clotting factor concentrates. Attend physical therapy sessions. Avoid activities that can cause injury." },
    { keywords: ["memory loss", "forgetfulness"], disease: "Dementia", remedy: "Create a safe and supportive environment. Develop a regular routine. Provide memory aids. Seek support from healthcare professionals and support groups." },
    { keywords: ["chest pain", "shortness of breath"], disease: "Coronary artery disease", remedy: "Follow a heart-healthy diet. Exercise regularly. Take prescribed medications, such as aspirin and statins, as directed." },
    { keywords: ["difficulty speaking", "facial droop"], disease: "Stroke", remedy: "Call emergency services immediately. Undergo thrombolytic therapy or a mechanical thrombectomy if eligible. Attend rehabilitation therapy sessions." },
    { keywords: ["painful urination", "abdominal pain"], disease: "Urinary tract infection (UTI)", remedy: "Stay hydrated. Take prescribed antibiotics as directed by a healthcare provider. Practice good hygiene." },
    { keywords: ["dry mouth", "thirst"], disease: "Diabetes insipidus", remedy: "Take prescribed desmopressin. Follow a specific fluid intake plan. Seek support from healthcare professionals." },
    { keywords: ["difficulty swallowing", "hoarse voice"], disease: "Thyroid nodules", remedy: "Undergo surgery if necessary. Monitor thyroid function regularly. Seek support from healthcare professionals." },
    { keywords: ["abdominal pain", "fever"], disease: "Appendicitis", remedy: "Undergo surgery to remove the appendix. Take prescribed antibiotics. Follow a specific diet plan during recovery." },
    { keywords: ["yellow skin", "abdominal pain"], disease: "Hepatitis", remedy: "Get plenty of rest. Avoid alcohol and certain medications. Follow a specific diet plan. Take prescribed antiviral medications." },
    { keywords: ["weakness", "fatigue"], disease: "Chronic fatigue syndrome", remedy: "Establish a manageable activity schedule. Practice good sleep hygiene. Attend therapy sessions." },
    { keywords: ["loss of appetite", "abdominal swelling"], disease: "Liver cirrhosis", remedy: "Avoid alcohol. Follow a specific diet plan. Take prescribed medications as directed by a healthcare provider." },
    { keywords: ["swollen lymph nodes", "night sweats"], disease: "Lymphoma", remedy: "Undergo chemotherapy, radiation therapy, or targeted therapy as recommended by an oncologist. Seek support from healthcare professionals and support groups." },
    { keywords: ["depression", "hopelessness"], disease: "Major depressive disorder", remedy: "Attend therapy sessions. Take prescribed antidepressant medications. Create a stable and supportive environment." },
    { keywords: ["irregular menstrual periods", "excess facial hair"], disease: "Polycystic ovary syndrome (PCOS)", remedy: "Maintain a healthy weight. Follow a specific diet plan. Take prescribed medications as directed by a healthcare provider." },
    { keywords: ["irritation", "redness"], disease: "Eczema", remedy: "Moisturize regularly. Use over-the-counter corticosteroid creams. Avoid triggers that worsen symptoms." },
    { keywords: ["difficulty breathing", "chest tightness"], disease: "Pneumonia", remedy: "Take prescribed antibiotics as directed by a healthcare provider. Get plenty of rest. Stay hydrated." },
    { keywords: ["abdominal discomfort", "gas"], disease: "Gastritis", remedy: "Avoid trigger foods and beverages. Eat smaller, more frequent meals. Take prescribed acid-reducing medications." },
    { keywords: ["painful bowel movements", "rectal bleeding"], disease: "Hemorrhoids", remedy: "Use over-the-counter creams or suppositories. Soak in a warm bath. Increase fiber intake and stay hydrated." },
    { keywords: ["difficulty concentrating", "restlessness"], disease: "Attention-deficit/hyperactivity disorder (ADHD)", remedy: "Attend therapy sessions. Create a structured environment. Take prescribed stimulant medications." },
    { keywords: ["decreased appetite", "dry skin"], disease: "Hypopituitarism", remedy: "Take prescribed hormone replacement therapies. Follow a specific diet plan. Attend regular follow-up appointments." },
    { keywords: ["cold intolerance", "weight gain"], disease: "Hypothyroidism", remedy: "Take prescribed synthetic thyroid hormone. Follow a healthy diet and exercise regimen. Attend regular follow-up appointments." },
    { keywords: ["blurred vision", "headache"], disease: "Glaucoma", remedy: "Use prescribed eye drops. Attend regular follow-up appointments. Undergo laser surgery or microsurgery if necessary." },
    { keywords: ["painful periods", "infertility"], disease: "Endometriosis", remedy: "Take prescribed pain relievers. Consider hormonal therapies or surgery. Attend regular follow-up appointments." },
    { keywords: ["frequent urination", "abdominal pain"], disease: "Interstitial cystitis", remedy: "Avoid trigger foods and beverages. Take prescribed medications as directed by a healthcare provider. Attend regular follow-up appointments." },
    { keywords: ["difficulty walking", "numbness"], disease: "Guillain-Barré syndrome", remedy: "Undergo plasmapheresis or receive intravenous immunoglobulin. Attend physical therapy sessions. Seek support from healthcare professionals and support groups." },
    { keywords: ["frequent hiccups", "acid reflux"], disease: "Gastroesophageal reflux disease (GERD)", remedy: "Avoid trigger foods and beverages. Eat smaller, more frequent meals. Take prescribed acid-reducing medications." },
    { keywords: ["abdominal pain", "bloating"], disease: "Gastric ulcer", remedy: "Take prescribed antibiotics to kill H. pylori bacteria. Take prescribed acid-reducing medications. Follow a specific diet plan." },
    { keywords: ["visual disturbances", "headache"], disease: "Migraine", remedy: "Identify and avoid triggers. Take prescribed pain relievers or preventive medications. Practice relaxation techniques." },
    { keywords: ["bone pain", "fatigue"], disease: "Osteoporosis", remedy: "Consume calcium and vitamin D-rich foods. Engage in weight-bearing exercises. Consider prescribed medications or hormone therapies." },
    { keywords: ["seizures", "staring spells"], disease: "Epilepsy", remedy: "Take prescribed anti-seizure medications. Consider surgery or electrical stimulation if necessary. Wear a medical alert bracelet." },
    { keywords: ["abdominal pain", "vomiting"], disease: "Gallstones", remedy: "Avoid high-fat foods. Take prescribed medications as directed by a healthcare provider. Undergo surgery to remove the gallbladder if necessary." },
    { keywords: ["chest pain", "rapid breathing"], disease: "Panic attack", remedy: "Practice deep breathing exercises. Attend therapy sessions. Take prescribed anti-anxiety medications." },
    { keywords: ["irregular heartbeat", "dizziness"], disease: "Atrial fibrillation", remedy: "Take prescribed blood-thinning medications. Undergo electrical cardioversion or catheter ablation if necessary. Follow a heart-healthy diet." },
    { keywords: ["hair loss", "pale skin"], disease: "Alopecia areata", remedy: "Use corticosteroid injections, creams, or lotions. Consider topical immunotherapy. Wear hairpieces or wigs if desired." },
    { keywords: ["painful joints", "morning stiffness"], disease: "Psoriatic arthritis", remedy: "Take prescribed nonsteroidal anti-inflammatory drugs (NSAIDs). Consider disease-modifying antirheumatic drugs (DMARDs) or biologics. Attend physical therapy sessions." },
    { keywords: ["frequent infections", "weight loss"], disease: "HIV/AIDS", remedy: "Take antiretroviral therapy (ART) as directed by a healthcare provider. Practice safe sex. Follow a healthy diet and exercise regimen." },
    { keywords: ["shortness of breath", "chronic cough"], disease: "Chronic obstructive pulmonary disease (COPD)", remedy: "Quit smoking. Take prescribed bronchodilators and inhaled steroids. Attend pulmonary rehabilitation sessions." },
    { keywords: ["frequent thirst", "blurred vision"], disease: "Type 1 diabetes", remedy: "Monitor blood sugar levels regularly. Administer insulin as directed by a healthcare provider. Follow a specific diet plan." },
    { keywords: ["frequent infections", "fatigue"], disease: "Lupus", remedy: "Apply sunscreen regularly. Take prescribed corticosteroids or immunosuppressants. Attend therapy sessions. Follow a healthy diet and exercise regimen." },
    { keywords: ["difficulty concentrating", "memory problems"], disease: "Mild cognitive impairment", remedy: "Engage in mental activities. Follow a heart-healthy diet. Exercise regularly. Attend therapy sessions." },
    { keywords: ["facial pain", "tooth sensitivity"], disease: "Dental caries", remedy: "Maintain good oral hygiene. Avoid sugary foods and beverages. Visit a dentist regularly for cleanings and check-ups." },
    { keywords: ["constipation", "fatigue"], disease: "Hypothyroidism", remedy: "Take prescribed synthetic thyroid hormone. Follow a healthy diet and exercise regimen. Attend regular follow-up appointments." },
    { keywords: ["excessive hunger", "fatigue"], disease: "Type 2 diabetes", remedy: "Follow a specific diet plan. Exercise regularly. Take prescribed medications, such as metformin, as directed by a healthcare provider." },

];


// Function to diagnose symptoms and provide remedy
function diagnoseSymptoms() {
    let userInput = document.getElementById('symptomInput').value.toLowerCase();
    let matchedResults = [];

    medicalDatabase.forEach(item => {
        item.keywords.forEach(keyword => {
            if (userInput.includes(keyword)) {
                matchedResults.push({ disease: item.disease, remedy: item.remedy });
            }
        });
    });

    displayDiagnosisResult(matchedResults);
}

// Function to display diagnosis result
function displayDiagnosisResult(result) {
    let displayElement = document.getElementById('diagnosisResult');
    if (result.length === 0) {
        displayElement.textContent = "No matching disease found. Please consult a medical professional.";
    } else {
        displayElement.innerHTML = "<strong>You may have:</strong><br/>";
        result.forEach(item => {
            displayElement.innerHTML += `<strong>Disease:</strong> ${item.disease}<br/><strong>Remedy:</strong> ${item.remedy}<br/><br/>`;
        });
    }
}
