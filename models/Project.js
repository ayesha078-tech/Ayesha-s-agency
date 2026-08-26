import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  link: { type: String },
});

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);