import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { sortGlobImages } from "./galleryUtils";

// Put your 4 screenshots in:
//   src/assets/projects/plantdiseasedetection/
// (e.g. 1.png, 2.png, 3.png, 4.png). The glob below also accepts
// .png.png, .jpg, .jpeg and .webp, so any of those names will work.
const plantRaw = import.meta.glob(
  "../assets/projects/plantdiseasedetection/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);
const PLANT_IMAGES = sortGlobImages(plantRaw);

export default function PlantDiseaseDetection() {
  return (
    <ProjectDetailLayout
      category="AI / ML APPLICATION"
      title="Plant Disease Detection"
      tagline="A deep learning app that identifies plant leaf diseases from an uploaded image, using a CNN trained on a 1.5 GB Kaggle dataset."
      tech={[
        "Python",
        "Streamlit",
        "Machine Learning",
        "Artificial Intelligence",
        "CNN",
        "Kaggle Dataset",
      ]}
      images={PLANT_IMAGES}
      liveLinks={[
        {
          label: "Live Demo",
          url: "https://plant-disease-detection-hknuvzcullqcrg7mzcrtyv.streamlit.app/",
        },
      ]}
      overview={[
        "Plant Disease Detection is my B.E. major project. It helps identify diseases in crop leaves from a single photo, so problems can be spotted early before they spread across a field.",
        "A Convolutional Neural Network (CNN) was trained on a 1.5 GB plant leaf image dataset from Kaggle and reached over 90% accuracy. The model is wrapped in a Streamlit interface so anyone can upload a leaf image and get a prediction instantly.",
      ]}
      features={[
        "CNN-based image classification trained on a 1.5 GB Kaggle leaf image dataset",
        "Over 90% accuracy on the trained model",
        "Upload a leaf image and get a disease prediction in real time",
        "Clean Streamlit interface that needs no setup for the end user",
        "Deployed on Streamlit Community Cloud with a public live demo",
      ]}
      architecture="The dataset was downloaded from Kaggle, preprocessed (resizing and normalisation) and used to train a CNN in Python. The trained model is loaded by a Streamlit app, which accepts an uploaded leaf image, runs it through the model and displays the predicted disease class. The app is deployed on Streamlit Community Cloud."
    />
  );
}
