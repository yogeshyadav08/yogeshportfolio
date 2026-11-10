import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Chip,
  Card,
  CardContent,
  Stack,
  Grid,
  IconButton,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import BuildIcon from "@mui/icons-material/Build";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import cvFile from "./assest/Yogesh Resumed.pdf";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#f5a524" },
    secondary: { main: "#2dd4bf" },
    background: { default: "#0d0f12", paper: "#15181d" },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
    h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255,255,255,0.08)",
          backgroundImage: "none",
          transition: "transform .25s, border-color .25s",
          "&:hover": { transform: "translateY(-4px)", borderColor: "#f5a524" },
        },
      },
    },
  },
});

const skills = [
  {
    icon: <CodeIcon />,
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    icon: <StorageIcon />,
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "bcrypt",
    ],
  },
  {
    icon: <BrushIcon />,
    title: "Graphic Design",
    items: [
      "Branding",
      "Social Media Creatives",
      "UI Design",
      "Typography",
      "Layout",
    ],
  },
  {
    icon: <BuildIcon />,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const projects = [
  {
    title: "HRMS — LinkedIn Post Manager",
    tech: ["Next.js", "Material UI", "AI"],
    points: [
      "Post to multiple connected LinkedIn accounts at once",
      "Scheduling system to automate publishing",
      "Draft saving plus AI caption and idea generation",
    ],
  },
  {
    title: "RecruitExe — File Manager",
    tech: ["Next.js", "Material UI", "APIs"],
    points: [
      "Complete folder and file management module",
      "Direct uploads from device via backend APIs",
      "Fast browsing, viewing and managing of files",
    ],
  },
  {
    title: "Online Voting System",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    points: [
      "Full-stack MERN voting application",
      "Secure RESTful APIs with JWT authentication",
      "Passwords protected with bcrypt hashing",
    ],
  },
  {
    title: "E-commerce Website",
    tech: ["HTML", "CSS", "JavaScript"],
    points: [
      "Responsive storefront with dynamic products from API",
      "Shopping cart with real-time price calculation",
    ],
  },
];

const timeline = [
  {
    when: "May 2025 – Sept 2025",
    title: "Frontend Developer Intern",
    where: "Fincooper Tech Pvt. Ltd., Indore",
    note: "Integrated backend APIs, built reusable UI components, worked with Next.js and Material UI.",
  },
  {
    when: "Feb 2024 – Apr 2025",
    title: "Advanced Frontend Certification",
    where: "GoWeb Tech Institute",
    note: "Completed advanced frontend development course.",
  },
  {
    when: "2024 – Pursuing",
    title: "BCA",
    where: "Makhanlal Chaturvedi National University, Bhopal",
    note: "GPA (2nd sem): 7.6/10",
  },
  {
    when: "2020 – 2021",
    title: "Higher Secondary",
    where: "MP Board",
    note: "GPA: 8.0/10",
  },
  {
    when: "2018 – 2019",
    title: "High School",
    where: "CBSE Board",
    note: "GPA: 7.6/10",
  },
];

function Section({ id, label, title, children }) {
  return (
    <Box id={id} component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          color="primary"
          sx={{ letterSpacing: 3, fontSize: 13, fontWeight: 700 }}
        >
          {label}
        </Typography>
        <Typography variant="h3" sx={{ mb: 5, fontSize: { xs: 32, md: 44 } }}>
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
}

export default function App() {
  const nav = ["About", "Skills", "Projects", "Journey", "Contact"];
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const mobileMenuOpen = Boolean(mobileMenuAnchor);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(13,15,18,0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              yogesh
              <Box component="span" sx={{ color: "primary.main" }}>
                .dev
              </Box>
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {nav.map((n) => (
                <Button key={n} color="inherit" href={`#${n.toLowerCase()}`}>
                  {n}
                </Button>
              ))}
            </Stack>
            <Button
              href={cvFile}
              download="Yogesh-Yadav-CV.pdf"
              variant="contained"
              color="primary"
              size="small"
              aria-label="Download CV"
              startIcon={<DownloadIcon />}
              sx={{
                ml: { xs: 0, md: 1.5 },
                minWidth: { xs: 0, md: "auto" },
                px: { xs: 1.25, md: 2 },
                whiteSpace: "nowrap",
              }}
            >
              <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                Download CV
              </Box>
              <Box component="span" sx={{ display: { xs: "inline", md: "none" } }}>
                CV
              </Box>
            </Button>
            <IconButton
              color="inherit"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls={
                mobileMenuOpen ? "mobile-navigation-menu" : undefined
              }
              disableRipple
              onClick={(event) =>
                setMobileMenuAnchor(mobileMenuOpen ? null : event.currentTarget)
              }
              sx={{
                display: { xs: "inline-flex", md: "none" },
                ml: 1,
                "&:hover": { bgcolor: "transparent" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-navigation-menu"
              anchorEl={mobileMenuAnchor}
              open={mobileMenuOpen}
              onClose={() => setMobileMenuAnchor(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1,
                    minWidth: 220,
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundImage:
                      "linear-gradient(145deg, rgba(28,32,38,0.98), rgba(17,19,23,0.98))",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
                    "& .MuiList-root": { p: 1 },
                  },
                },
              }}
            >
              {nav.map((n) => (
                <MenuItem
                  key={n}
                  component="a"
                  href={`#${n.toLowerCase()}`}
                  onClick={() => setMobileMenuAnchor(null)}
                  sx={{
                    minHeight: 48,
                    borderRadius: 1.5,
                    mb: 0.5,
                    "&:last-child": { mb: 0 },
                    "&:hover": {
                      color: "primary.main",
                      bgcolor: "rgba(245,165,36,0.1)",
                    },
                  }}
                >
                  {n}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero */}
      <Box
        id="about"
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 10, md: 16 },
          background:
            "radial-gradient(circle at 80% 20%, rgba(245,165,36,0.18), transparent 45%), radial-gradient(circle at 10% 90%, rgba(45,212,191,0.12), transparent 40%)",
        }}
      >
        <Container maxWidth="lg">
          <Chip
            label="Open to opportunities"
            color="secondary"
            variant="outlined"
            sx={{ mb: 3 }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 44, md: 84 }, lineHeight: 1.05 }}
          >
            Hi, I'm Yogesh Yadav.
            <br />
            <Box component="span" sx={{ color: "primary.main" }}>
              React.js Developer
            </Box>
            <Box component="span" sx={{ color: "text.secondary" }}>
              {" "}
              & Designer.
            </Box>
          </Typography>
          <Typography
            sx={{ mt: 3, maxWidth: 640, color: "text.secondary", fontSize: 18 }}
          >
            I build fast, responsive web apps with React, Next.js, Node.js and
            MongoDB — and design visuals that look as good as they work. Based
            in Indore, India.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 5 }}
          >
            <Button variant="contained" size="large" href="#projects">
              View my work
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="mailto:yogeshydv008@gmail.com"
            >
              Hire me
            </Button>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
            <IconButton href="https://github.com/yogeshyadav08" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/yogesh-yadav/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto:yogeshydv008@gmail.com">
              <EmailIcon />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      <Section id="skills" label="WHAT I DO" title="Skills & Tools">
        <Grid container spacing={3}>
          {skills.map((s) => (
            <Grid key={s.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Box sx={{ color: "primary.main", mb: 1 }}>{s.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {s.title}
                  </Typography>
                  <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                    {s.items.map((i) => (
                      <Chip key={i} label={i} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section id="projects" label="SELECTED WORK" title="Projects">
        <Grid container spacing={3}>
          {projects.map((p, idx) => (
            <Grid key={p.title} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    color="primary"
                    sx={{ fontFamily: "'Space Grotesk'", fontSize: 14 }}
                  >
                    0{idx + 1}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {p.title}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{ pl: 2.5, color: "text.secondary", m: 0, mb: 3 }}
                  >
                    {p.points.map((pt) => (
                      <li key={pt}>
                        <Typography sx={{ mb: 0.5 }}>{pt}</Typography>
                      </li>
                    ))}
                  </Box>
                  <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                    {p.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        color="secondary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section id="journey" label="EXPERIENCE & EDUCATION" title="My Journey">
        <Stack divider={<Divider />} spacing={3}>
          {timeline.map((t) => (
            <Grid container key={t.title} spacing={2}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography color="primary" sx={{ fontWeight: 600 }}>
                  {t.when}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 9 }}>
                <Typography variant="h6">{t.title}</Typography>
                <Typography color="secondary">{t.where}</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {t.note}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Section>

      <Section
        id="contact"
        label="GET IN TOUCH"
        title="Let's build something together"
      >
        <Card sx={{ "&:hover": { transform: "none" } }}>
          <CardContent sx={{ p: { xs: 3, md: 6 } }}>
            <Grid container spacing={3}>
              {[
                {
                  icon: <EmailIcon />,
                  text: "yogeshydv008@gmail.com",
                  href: "mailto:yogeshydv008@gmail.com",
                },
                {
                  icon: <PhoneIcon />,
                  text: "+91 97552 93559",
                  href: "tel:+919755293559",
                },
                {
                  icon: <PlaceIcon />,
                  text: "Indore, Madhya Pradesh",
                  href: undefined,
                },
                {
                  icon: <LinkedInIcon />,
                  text: "linkedin.com/in/yogesh-yadav",
                  href: "https://www.linkedin.com/in/yogesh-yadav-95463b205/",
                },
              ].map((c) => (
                <Grid key={c.text} size={{ xs: 12, sm: 6 }}>
                  <Button
                    startIcon={c.icon}
                    href={c.href}
                    color="inherit"
                    size="large"
                    sx={{ justifyContent: "flex-start" }}
                  >
                    {c.text}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Section>

      <Box
        sx={{
          py: 4,
          textAlign: "center",
          color: "text.secondary",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        © {new Date().getFullYear()} Yogesh Yadav
      </Box>
    </ThemeProvider>
  );
}
