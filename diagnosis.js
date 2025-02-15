document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchDropdown = document.getElementById('search-dropdown');
    const searchResults = document.getElementById('search-results');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const selectedDisease = searchDropdown.value;
        const matchingRemedy = findRemedy(selectedDisease);

        if (matchingRemedy) {
            // Display the remedy if found
            searchResults.innerHTML = `<p><strong>${selectedDisease}</strong> remedy: ${matchingRemedy}</p>`;
        } else {
            // Display a message if no remedy found
            searchResults.innerHTML = `<p>No remedy found for <strong>${selectedDisease}</strong>.</p>`;
        }
    });

    function findRemedy(disease) {
        // Define your remediesData object here with 50 diseases and their remedies
        const remediesData = {
            "Headache": "For a headache, you can try drinking ginger tea. Ginger contains natural anti-inflammatory compounds that can help reduce headache pain. Find a quiet, dark room to rest and relax. Dim lighting and minimal noise can alleviate discomfort.",
            "Stomachache": "To relieve a stomachache, consider boiling a handful of mint leaves in water. After the infusion cools, drink it slowly. Mint has soothing properties that can help ease stomach discomfort. It's also advisable to avoid heavy or spicy foods during this time.",
            "Cough": "For a persistent cough, create a mixture by combining honey and fresh ginger juice. Consuming this mixture can help soothe your throat and reduce coughing. Additionally, staying hydrated by drinking warm fluids can provide relief.",
            "Fever": "A fever is often a sign that your body is fighting an infection. To reduce fever, boil a few basil leaves in water and drink the herbal infusion. Rest is crucial during this time, as it helps your body recover faster.",
            "Sore Throat": "Gargling with warm saltwater can be an effective remedy for a sore throat. The saltwater helps reduce inflammation and provides temporary relief from pain. You can repeat this gargling process several times a day for comfort.",
            "Indigestion": "For indigestion, consider drinking a cup of peppermint tea after meals. Peppermint can relax the muscles in your gastrointestinal tract, which can alleviate discomfort. Additionally, avoiding overeating and spicy foods can help prevent indigestion.",
            "Diarrhea": "To manage diarrhea, consume a diet of boiled rice and ripe bananas. These foods are easy on the stomach and can help firm up stools. It's essential to stay hydrated by drinking clear fluids like oral rehydration solutions.",
            "Nausea": "If you're experiencing nausea, chewing on fennel seeds or ginger slices can help calm your stomach. Ginger, in particular, has anti-nausea properties. Sip on clear fluids like ginger ale or peppermint tea to stay hydrated.",
            "Insomnia": "To improve sleep and manage insomnia, practice relaxation techniques such as deep breathing exercises and progressive muscle relaxation. Maintain a consistent sleep schedule, and avoid caffeine and electronics before bedtime.",
            "Anxiety": "Managing anxiety involves various strategies. Meditation, mindfulness exercises, and deep breathing can help reduce anxiety levels. Identifying stressors and developing coping mechanisms is essential for long-term anxiety management.",
            "Common Cold": "For a common cold, it's crucial to stay hydrated by drinking warm fluids like herbal tea or chicken soup. Rest is essential to allow your body to recover. Over-the-counter cold remedies can help alleviate symptoms.",
            "Allergies": "To alleviate allergy symptoms, identify and avoid allergens whenever possible. Over-the-counter antihistamines can provide relief from symptoms such as sneezing, itching, and nasal congestion.",
            "Sinusitis": "Sinusitis can cause facial pain and congestion. Use a saline nasal spray to relieve congestion and nasal discomfort. Warm compresses applied to your face can also help soothe pain. Stay hydrated to maintain mucus flow.",
            "Asthma": "Managing asthma involves using an inhaler as prescribed by your doctor. Avoid asthma triggers like smoke and allergens. Regular exercise and maintaining a healthy lifestyle can help control asthma symptoms.",
            "Arthritis": "For arthritis pain, apply warm compresses to the affected joints. Gentle exercises, such as swimming or yoga, can help improve joint flexibility and reduce pain. Consult with a healthcare professional for personalized treatment options.",
            "Back Pain": "Rest is crucial for back pain relief. Apply ice or heat to the affected area, alternating between the two. Perform gentle stretches to improve flexibility and alleviate muscle tension. Maintain good posture to prevent future back pain.",
            "Migraine": "When experiencing a migraine, apply a cold compress to your forehead or the back of your neck. Rest in a quiet, dark room, as light and noise sensitivity are common during migraines. Over-the-counter pain relievers can help.",
            "Heartburn": "To manage heartburn, avoid trigger foods like spicy, acidic, or fatty items. Elevating the head of your bed can reduce nighttime heartburn. Antacids or acid reducers can provide temporary relief.",
            "Hiccups": "Hiccups can be annoying but are usually harmless. Drinking a glass of cold water slowly or holding your breath can help stop hiccups. Staying calm and relaxed during hiccups can also be effective.",
            "Constipation": "To alleviate constipation, increase your fiber intake by consuming fruits, vegetables, and whole grains. Drinking plenty of water is essential to soften stools. Regular physical activity can promote healthy bowel movements.",
            "High Blood Pressure": "To manage high blood pressure, reduce salt intake and maintain a balanced diet rich in fruits and vegetables. Engage in regular exercise and consider stress-reduction techniques like yoga or meditation.",
            "Acne": "Keep acne-prone skin clean by washing it gently with a mild cleanser. Avoid touching your face to prevent the spread of bacteria. Consider using over-the-counter acne treatments or consult a dermatologist for personalized care.",
            "Eczema": "Moisturize dry skin frequently using fragrance-free products. Avoid harsh soaps and detergents. Applying topical corticosteroids as prescribed by a dermatologist can help manage eczema flare-ups.",
            "Rash": "To soothe a rash, apply calamine lotion to the affected area. Avoid scratching, as it can worsen the rash. If the rash persists or worsens, consult a healthcare professional for a proper diagnosis and treatment.",
            "Stress": "Managing stress involves various approaches. Practice stress-reduction techniques like yoga, meditation, or mindfulness exercises. Maintain a healthy work-life balance and engage in activities that promote relaxation.",
            "Depression": "Seeking therapy and support is crucial for managing depression. Therapists can provide coping strategies and emotional support. In some cases, medication prescribed by a psychiatrist may also be necessary.",
            "Obesity": "To manage obesity, maintain a balanced diet with portion control. Engage in regular physical activity, aiming for at least 150 minutes of moderate exercise per week. Consult with a healthcare provider for personalized guidance.",
            "Osteoporosis": "To support bone health, take calcium and vitamin D supplements as recommended by your healthcare provider. Engage in weight-bearing exercises like walking or weightlifting. Avoid smoking and excessive alcohol consumption.",
            "Gout": "Limit high-purine foods such as organ meats and certain seafood. Staying hydrated can help prevent gout attacks. Consult with a healthcare provider for medications to manage gout symptoms.",
            "Anemia": "Increase iron-rich foods in your diet, such as lean meats, beans, and leafy greens. Iron supplements may be prescribed if needed. A healthcare provider can determine the underlying cause of anemia and provide appropriate treatment.",
            "Bronchitis": "Get plenty of rest and drink fluids to stay hydrated. Over-the-counter cough medicines may help relieve symptoms. Avoid smoking and exposure to smoke. Consult with a healthcare provider if symptoms worsen or persist.",
            "Hypothyroidism": "Management of hypothyroidism typically involves taking thyroid hormone replacement medication as prescribed by your healthcare provider. Regular monitoring of thyroid levels is essential for optimal treatment.",
            "Hyperthyroidism": "Managing hyperthyroidism may involve medications to regulate thyroid function or other treatments such as radioactive iodine therapy. Consult with an endocrinologist for personalized care.",
            "Kidney Stones": "Drink plenty of water to help flush out kidney stones. Depending on the size and location of the stones, medical procedures may be necessary for removal. Dietary changes may also be recommended.",
            "Liver Disease": "For liver disease, follow a low-fat diet and avoid alcohol. Regular monitoring by a hepatologist is essential to assess liver function and determine the appropriate treatment plan.",
            "Ulcers": "Taking prescribed medications, such as proton pump inhibitors or H2 blockers, can help manage ulcers. Avoiding spicy foods and managing stress can also contribute to symptom relief.",
            "Gallstones": "In cases of severe gallstones, surgical removal of the gallbladder may be necessary. Dietary modifications, including reducing fat intake, can help prevent gallstone formation.",
            "Malaria": "To prevent malaria, take antimalarial medications as prescribed and use mosquito nets while sleeping in endemic areas. Prompt medical attention is necessary if malaria symptoms develop.",
            "Dengue Fever": "Stay hydrated and get plenty of rest if you contract dengue fever. Severe cases require immediate medical attention. Avoid mosquito bites by using repellent and mosquito nets.",
            "Chikungunya": "Get plenty of rest and manage pain with over-the-counter pain relievers. Stay hydrated to help your body recover from chikungunya infection. Consult a healthcare provider if symptoms persist or worsen.",
        
        };
        
        

        // Search the data source for the remedy corresponding to the selected disease
        return remediesData[disease] || null;
    }
});
