const express = require("express");
const router = express.Router();
const Projects = require("../models/Projects");
const ProjectsVariant = require("../models/ProjectsVariants");
const ProjectsDeveloper = require("../models/ProjectsDeveloper");
const ProjectsAmenities = require("../models/ProjectsAmenities");
const ProjectsLocality = require("../models/ProjectsLocality");
const { ObjectID } = require('mongodb');

router.get("/fetchAllTrendingProjectDetails", async (req, res) => {
  try {
    const projects = await Projects.find({ Projects: req.id });
    res.json(projects);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/fetchDetailsBySearchLocality/", async (req, res) => {
    try {
      const projects = await Projects.find({ Projects: req.locality });
      res.json(projects);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
});

router.get("/fetchProjectDetailsByID/:id", async (req, res) => {
  try {
    const projectId = req.params.id; // Fetch project ID from URL params

    const project = await Projects.findById(projectId); // Query MongoDB using Mongoose

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/fetchProjectVariantByProjectID/:id/variant', async (req, res) => {
  try {
    const projectID = req.params.id; // Fetch project ID from URL params

    const projectVariants = await ProjectsVariant.find({ projectID }); // Query MongoDB using Mongoose

    if (!projectVariants) {
      return res.status(404).json({ message: 'Project Variant not found' });
    }

    res.json(projectVariants);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/fetchProjectVariantByProjectIDd/:id/variant', async (req, res) => {
  try {
    const projectID = req.params.id; // Fetch project ID from URL params

    const projectVariants = await ProjectsVariant.find({ projectID }); // Query MongoDB using Mongoose

    if (!projectVariants) {
      return res.status(404).json({ message: 'Project Variant not found' });
    }

    res.json(projectVariants);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/fetchProjectDeveloper/:builderID', async (req, res) => {
  try {
    const builderID = req.params.builderID;
    // Use Mongoose or MongoDB driver to query the builders collection based on the builderID
    const result = await ProjectsDeveloper.findById(builderID);
    if (!result) {
      res.status(404).json({ message: 'Project Developer not found' });
    }
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/fetchProjectAmenitiesByProjectID/:id/amenities', async (req, res) => {
  try {
    const id = req.params.id; // Fetch project ID from URL params

    const projectAmenities = await ProjectsAmenities.find({ id }); // Query MongoDB using Mongoose

    if (!projectAmenities) {
      return res.status(404).json({ message: 'Project Variant not found' });
    }

    res.json(projectAmenities);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/fetchProjectNearbyLocalityByProjectID/:id/locality', async (req, res) => {
  try {
    const projectID = req.params.id; // Fetch project ID from URL params

    const projectLocality = await ProjectsLocality.find({ projectID }); // Query MongoDB using Mongoose

    if (!projectLocality) {
      return res.status(404).json({ message: 'Project Nearby Locality not found' });
    }

    res.json(projectLocality);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Define your update route
router.put('/update', async (req, res) => {
  try {
    const { id, mobile, save } = req.body;

    // Update the document
    const result = await Projects.updateOne(
      { _id: ObjectID(id) },
      { $set: { number: mobile, save: save } }
    );

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Define your update route
router.put('/update2', async (req, res) => {
  try {
    const { id, mobile2, save2 } = req.body;

    // Update the document
    const result = await Projects.updateOne(
      { _id: ObjectID(id) },
      { $set: { number: mobile2, save: save2 } }
    );

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// router.get('/api/count', async (req, res) => {
//   const { fieldName, fieldValue } = req.query;

//   try {
//     const count = await Projects.countDocuments({ [fieldName]: fieldValue });

//     res.json({ count });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

module.exports = router;
