import express, { json } from 'express'
import cors from 'cors'
import cron from 'node-cron'
import prisma from "./db.js"
import taskRoutes from './routes/route_tasks.js'
import taskListsRoutes from './routes/routes.js'
import groupRoutes from './routes/group_routes.js'
import {runScheduler} from './scheduler.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Task Management API is running")
})

//ROUTES
app.use("/api/tasks", taskRoutes)
app.use("/api/tasklists", taskListsRoutes)
app.use("/api/groups", groupRoutes)

//Scheduler ; runs midnight every day
// Generates daily + weekly lists and cleans up expired ones
// Requires: npm install node-cron
cron.schedule('0 0 * * *', () => {
    console.log('Running scheduled task');
    runScheduler();
});

//Trash cleanup; hard delete after 30 days
async function purgeOldTrash() {
    const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
    const deleted = await prisma.task.deleteMany({
        where: {
            deletedAt: {
                lte: cutoff
            }
        }
    });
    if (deleted.count > 0) {
    console.log(`Purged ${deleted.count} old tasks from trash`);
} }

purgeOldTrash();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
