<div className="flex justify-center items-center mx-4 ">
  <div className="w-full h-full flex-wrap flex my-[100px] justify-center items-center gap-10">
    fwf
  </div>
</div>;
    <div className="relative bg-red-400 w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex border border-red-400  max-md:px-0 rounded-lg shadow-lg hover:shadow-2xl transition-all flex-col justify-between items-center"
      >

      </motion.div>
    </div>