# Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Aceternity UI components.

## Features

- Responsive design that works on all devices
- Dark mode support
- Rate limiting to protect against DDoS attacks
- Modern UI with glowing effects
- SEO optimized

## Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment Instructions

### Deploying to Vercel (Recommended)

Vercel is the easiest platform to deploy Next.js applications:

1. Create an account on [Vercel](https://vercel.com)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Run the following command in your project directory:
   ```bash
   vercel
   ```
4. Follow the prompts to deploy your application
5. For subsequent deployments, you can use:
   ```bash
   vercel --prod
   ```

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments.

### Deploying to Render

1. Create an account on [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Use the following settings:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment: Node.js
5. Click "Create Web Service"

## Updating Your Website

### Method 1: Direct Updates via Git

1. Make changes to your local codebase
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
3. Push to your repository:
   ```bash
   git push origin main
   ```
4. If you've set up automatic deployments with Vercel or Render, your site will update automatically

### Method 2: Using the Vercel Dashboard

1. Log in to your Vercel dashboard
2. Select your project
3. Go to the "Settings" tab
4. Under "Git Integration," you can manage your deployments

### Common Updates

#### Adding a New Project

1. Open `components/projects.tsx`
2. Add a new project object to the `projects` array:
   ```javascript
   {
     title: "New Project Name",
     description: "Project description",
     image: "/image-path.jpg",
     technologies: ["Tech1", "Tech2", "Tech3"],
     achievements: [
       "Achievement 1",
       "Achievement 2",
       "Achievement 3",
     ],
     demoLink: "https://demo-link.com",
     codeLink: "https://github.com/your-repo",
   }
   ```
3. Add your project image to the `public` directory

#### Updating Skills

1. Open `components/skills.tsx`
2. Modify the `skillCategories` array to add or update skills

#### Updating Experience

1. Open `components/experience.tsx`
2. Modify the `experienceItems` array to add or update experience items

## Performance Optimization

- Images are optimized using Next.js Image component
- Rate limiting is implemented to protect against DDoS attacks
- The website uses responsive design principles to ensure good performance on all devices

## Troubleshooting

If you encounter any issues during deployment or updates, check:

1. Vercel/Render deployment logs for errors
2. Make sure all dependencies are correctly installed
3. Verify that your Next.js configuration is correct
4. Check for any console errors in your browser

## License

This project is licensed under the MIT License - see the LICENSE file for details. 