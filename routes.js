import express from "express"
import prisma from "../db.js"

const router = express.Router()

// POST /tasklists
//Create new task list
router.post("/", async (req, res) => {
    const { title, user_id } = req.body
    if (!title) return res.status(400).json({error: "Title is required"})
    if (!user_id) return res.status(400).json({error: "User ID is required"})
    try {
        const taskList = await prisma.taskList.create({
            data: {
                title,
                user_id
            }
        })
        res.status(201).json(taskList)
    } catch (error) {
        res.status(500).json({ error: "Tasks list creation failed" })
    }
})

//GET ?tasklists/:id/tasks
//get all tasks in a task list
router.get("/:id/tasks", async (req, res) => {
    try{
        const tasks = await prisma.task.findMany({
            where: {
                task_list_id: parseInt(req.params.id),
                deleted_at: null
            },
            include: { task_tags: {include :{ tag: true}}}
        })
        res.json(tasks)
    }catch (error) {
        res.status(500).json({ error: "Failed to retrieve tasks" })
    }})

    //GET /tasklist/:id/progress
    //Get completion percentage for a task list

    router.get("/:id/progress", async (req, res) => {
        try {
            const totalTasks = await prisma.task.count({
                where: {task_list_id: parseInt(req.params.id), deleted_at: null}
            })

            const completedTasks = await prisma.task.count({
                where: {task_list_id: parseInt(req.params.id), status: "completed", deleted_at: null} 
            })

            const progress = total === 0 ? 0 : Math.round((completed / total) * 100);
    res.json({ total, completed, progress: `${progress}%` })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Progress fetch failed" })
  }
})
 
export default router