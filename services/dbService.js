import db from '../db/models';

class dbService {
    static async getAll(model) {
        try {
            return await db[model].findAll();
        } catch (error) {
            throw error;
        }
    }

    static async add(model, newData) {
        try {
            return await db[model].create(newData);
        } catch (error) {
            throw error;
        }
    }

    static async update(model, id, data) {
        try {
            const toUpdate = await db[model].findOne({
                where: { id: Number(id) }
            });

            if (toUpdate) {
                await db[model].update(data, { where: { id: Number(id) } });

                return data;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async get(id) {
        try {
            const data = await db[model].findOne({
                where: { id: Number(id) }
            });

            return data;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const toDelete = await db[model].findOne({ where: { id: Number(id) } });

            if (toDelete) {
                const data = await db[model].destroy({
                    where: { id: Number(id) }
                });
                return data;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default dbService;